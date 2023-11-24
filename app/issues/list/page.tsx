import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import IssueActions from "./IssueActions";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";
import { Flex } from "@radix-ui/themes";

async function IssuesPage({ searchParams }: IssueQuery) {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issueCount = await prisma.issue.count({ where: { status } });
  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssueTable issues={issues} searchParams={searchParams} />
      <Pagination
        pageSize={pageSize}
        itemCount={issueCount}
        currentPage={page}
      />
    </Flex>
  );
}

export const dynamic = "force-dynamic";

export default IssuesPage;
