import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/client";
interface Props {
  params: { id: string };
}
async function EditIssuePage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  );
}

export default EditIssuePage;
