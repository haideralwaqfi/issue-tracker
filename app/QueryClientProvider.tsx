"use client";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClintProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";
const queryClient = new QueryClient();

function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <ReactQueryClintProvider client={queryClient}>
      {children}
    </ReactQueryClintProvider>
  );
}

export default QueryClientProvider;
