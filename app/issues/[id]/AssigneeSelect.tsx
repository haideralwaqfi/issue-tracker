"use client";

import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function AssigneeSelect({ issue }: { issue: Issue }) {
  const { data: users, error, isLoading } = useUser();

  const assignIssue = async (userId: string) => {
    try {
      await axios.patch("/api/issues/" + issue.id, {
        assignedToUserId: userId == "Unassigned" ? null : userId,
      });
    } catch (error) {
      toast.error("Change could not be saved");
    }
  };

  if (isLoading) return <Skeleton />;
  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "Unassigned"}
        onValueChange={assignIssue}>
        <Select.Trigger placeholder="Assignee..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestion</Select.Label>
            <Select.Item value="Unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
}

const useUser = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

export default AssigneeSelect;
