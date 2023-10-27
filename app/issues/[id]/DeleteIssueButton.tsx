"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function DeleteIssueButton({ issueId }: { issueId: number }) {
  const router = useRouter();
  const [error, setError] = useState(false);
  const handleDelete = async () => {
    try {
      await axios.delete("/api/issues/" + issueId);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue, this action is not
            revisable.
          </AlertDialog.Description>
          <Flex mt="4" gap="2">
            <AlertDialog.Cancel>
              <Button variant="outline" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" variant="outline" onClick={handleDelete}>
                Delete This Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This Issue can not be Deleted
          </AlertDialog.Description>

          <Button
            onClick={() => setError(false)}
            variant="outline"
            mt="2"
            color="gray">
            Cancel
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
}

export default DeleteIssueButton;
