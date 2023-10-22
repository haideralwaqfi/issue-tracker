import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueEditButton({ issueId }: { issueId: number }) {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button>
        <Pencil2Icon />
        Edit
      </Button>
    </Link>
  );
}

export default IssueEditButton;
