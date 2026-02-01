"use client";
import { useDisclosure } from "@mantine/hooks";
import { Box, Burger, Drawer, Text, Button } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import RollingButton from "./button-component/RotateButton";
import { IconDownload, IconFileDownload } from "@tabler/icons-react";
const NAV_LINKS = [
  { label: "Professional Summary", href: "/professional-summary" },
  { label: "Contact", href: "/contact" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <nav className="w-full lg:h-[90px] md:py-4 px-6 md:px-24 shadow-md bg-white flex justify-between items-center sticky top-0 z-50">
        <Link href="/">
          <Text unstyled className="text-2xl font-medium text-[#1B1B1B]">
            KSJ
          </Text>
        </Link>

        
        <Box className="hidden md:flex gap-6 text-[#1B1B1B] text-xl font-medium items-center">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}

          <RollingButton 
      frontContent={
        <>
          <span>Download CV</span>
        </>
      } 
      backContent={
        <>
          <IconFileDownload size={20} />
        </>
      } 
      href="/resume.pdf"
      download
    />
        </Box>

        <Box className="md:hidden p-2 rounded-md">
          <Burger opened={opened} onClick={toggle} />
        </Box>
      </nav>

      <Drawer opened={opened} position="right" onClose={close} padding="md" size="xs">
        <Box className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              className="text-[#1B1B1B] text-lg font-medium"
              key={link.href}
              href={link.href}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
            <Button
            component="a"
            href="/Kirti Saumya Joshi - CV.pdf"
            download
            color="dark"
            size="md"
            radius="xl"
            variant={hovered ? "outline" : "filled"} 
            classNames={{ label: "text-lg font-medium" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Resume Download
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
