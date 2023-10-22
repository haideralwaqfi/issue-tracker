import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueEditButton({ issueId }: { issueId: number }) {
  return (
    <Button>
      <Pencil2Icon />
      Edit
      <Link href={`/issues/${issueId}/edit`}></Link>
    </Button>
  );
}

export default IssueEditButton;
