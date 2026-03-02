"use client";
import { Box } from "@mantine/core";
import Main from "./components/home/Main";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <Box className="w-full h-full">
      <Navbar />
      <Main/>
    </Box>
  );
}
