"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { AiFillBug } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

function Navbar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues/list" },
  ];
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  return (
    <Container>
      <nav className=" border-b mb-5 mx-5 py-3">
        <Flex justify="between">
          <Flex align="center" gap="3">
            {" "}
            <Link href="/">
              <AiFillBug />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={classNames({
                      "text-zinc-900": currentPath === link.href,
                      "text-zinc-500": currentPath !== link.href,
                      "hover:text-zinc-800 transition-colors": true,
                    })}
                    href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Logout</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </nav>
    </Container>
  );
}

export default Navbar;
