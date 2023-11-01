import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pagination currentPage={2} pageSize={10} itemCount={11} />
    </main>
  );
}
