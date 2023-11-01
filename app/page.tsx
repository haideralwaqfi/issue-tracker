import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pagination
        currentPage={parseInt(searchParams.page)}
        pageSize={10}
        itemCount={100}
      />
    </main>
  );
}
