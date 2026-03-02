"use client";
import { useDisclosure } from "@mantine/hooks";
import { Box, Burger, Drawer, Text, Button } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import RollingButton from "./button-component/RotateButton";
import { IconFileDownload } from "@tabler/icons-react";
const NAV_LINKS = [
  { label: "Professional Summary", href: "#professionalsummary" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Counter", href: "#counter" },
  { label: "Contact", href: "#contact" },
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const navbarHeight = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
};

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <nav className="w-full lg:h-[90px] md:py-4 px-6 md:px-24 shadow-md bg-white flex justify-between items-center sticky top-0 z-100">
        <Link href="/">
          <Text
          onClick={() => {
          window.scrollTo;
          }}
           unstyled className="text-2xl font-medium text-[#1B1B1B]">
            KSJ
          </Text>
        </Link>

        
        <Box className="hidden md:flex gap-6 text-[#1B1B1B]  items-center">
          {NAV_LINKS.map((link) => (
            <Link
              className="text-lg font-extralight"
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
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
                key={link.label}
                href={link.href}
                onClick={(e) => { handleNavClick(e, link.href); close(); }}
              >
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
      </Drawer>
    </>
  );
}
