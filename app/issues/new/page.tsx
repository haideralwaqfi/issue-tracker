"use client";
import React, { useState } from "react";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { log } from "console";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationScheme";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

function NewIssue() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <div className="pb-5">
          <Callout.Root color="red">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        </div>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues/");
          } catch (error) {
            setError("unexpected error");
          }
        })}>
        <TextField.Root>
          <TextField.Input
            {...register("title")}
            placeholder="Title"></TextField.Input>
        </TextField.Root>
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
}

export default NewIssue;
