import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet" }
> = {
  CLOSED: { label: "open", color: "green" },
  IN_PROGRESS: { label: "in progress", color: "violet" },
  OPEN: { label: "open", color: "red" },
};

function IssueStatusBadge({ status }: { status: Status }) {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
}

export default IssueStatusBadge;
