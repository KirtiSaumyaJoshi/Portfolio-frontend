"use client";

import { useDisclosure } from "@mantine/hooks";
import { Box, Burger, Drawer, Text } from "@mantine/core";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <nav className="w-full py-4 px-6 md:px-24 lg:px-52 shadow-md bg-white flex justify-between items-center">
        <Link href="/">
          <Text unstyled className="text-2xl font-medium">KSJ</Text>
        </Link>

        <Box className="hidden md:flex gap-6 text-xl font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </Box>

        <Box className="md:hidden p-2 rounded-md">
          <Burger opened={opened} onClick={toggle} />
        </Box>
      </nav>

      <Drawer opened={opened} position="right" onClose={close} padding="md" size="xs">
        <Box className="flex flex-col gap-6 text-lg font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={close}>
              {link.label}
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
