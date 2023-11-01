import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

function Pagination({ itemCount, pageSize, currentPage }: Props) {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (itemCount <= pageSize) return null;
  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        color="gray"
        variant="soft"
        className="hover:cursor-pointer"
        disabled={currentPage == 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        className="hover:cursor-pointer"
        disabled={currentPage == 1}>
        <ChevronLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        className="hover:cursor-pointer"
        disabled={currentPage == pageCount}>
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        className="hover:cursor-pointer"
        disabled={currentPage == pageCount}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
}

export default Pagination;
