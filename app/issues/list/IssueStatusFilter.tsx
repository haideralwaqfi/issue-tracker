"use client";
import React from "react";
import { Select } from "@radix-ui/themes";
import { Status } from "@prisma/client";

function IssueStatusFilter() {
  const statuses: { label: string; value?: Status }[] = [
    { label: "All" },
    { label: "Open", value: "OPEN" },
    { label: "In progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <>
      <Select.Root>
        <Select.Trigger placeholder="Filter status by" />
        <Select.Content>
          {statuses.map((status) => (
            <Select.Item key={status.value} value={status.value || "ALL"}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </>
  );
}

export default IssueStatusFilter;
