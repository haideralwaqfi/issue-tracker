import { Flex, Card, Box } from "@radix-ui/themes";

import { Skeleton } from "@/app/components";

function LoadingIssuePage() {
  return (
    <Box className="max-w-xl">
      <Skeleton />

      <Flex gap="3" my="2">
        <Skeleton width="3rem" />
        <Skeleton width="3rem" />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
}

export default LoadingIssuePage;
