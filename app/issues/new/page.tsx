"use client";
import React from "react";
import { Button, TextArea, TextField } from "@radix-ui/themes";
function NewIssue() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title"></TextField.Input>
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
}

export default NewIssue;
