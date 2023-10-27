import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueEditButton({ issueId }: { issueId: number }) {
  return (
    <Button>
      <Link href={`/issues/${issueId}/edit`}>
        <Flex gap="2">
          <Pencil2Icon /> <span>Edit</span>
        </Flex>
      </Link>
    </Button>
  );
}

export default IssueEditButton;
