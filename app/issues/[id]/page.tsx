import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
interface Props {
  params: { id: string };
}
async function page({ params }: Props) {
  console.log(typeof params.id);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return (
    <Box>
      <Heading>
        <p>{issue.title}</p>
      </Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose mt-4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Box>
  );
}

export default page;
