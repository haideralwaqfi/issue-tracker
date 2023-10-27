import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueEditButton({ issueId }: { issueId: number }) {
  return (
    <Link href={`/issues/edit/${issueId}`}>
      <Button className="w-full hover:cursor-pointer">
        <Flex gap="2">
          <Pencil2Icon /> <span>Edit</span>
        </Flex>
      </Button>
    </Link>
  );
}

export default IssueEditButton;
