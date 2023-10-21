import Link from "next/link";
import React from "react";

import { AiFillBug } from "react-icons/ai";

function Navbar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 mx-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
