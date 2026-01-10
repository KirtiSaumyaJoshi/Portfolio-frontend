"use client";

import { Box, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

function getTimeDifference(startDate: Date) {
  const now = new Date();
  const diff = Math.max(0, now.getTime() - startDate.getTime());

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

  const years = Math.floor(daysTotal / 365);
  const days = daysTotal % 365;

  return { years, days, hours, minutes, seconds };
}

export default function DeveloperCLock() {
  const startDate = new Date("2024-03-01T00:00:00");

  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(() =>
    getTimeDifference(startDate)
  );

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTime(getTimeDifference(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <Box className="w-full h-screen px-6 lg:px-16 flex flex-col items-center gap-6 lg:gap-16 justify-center text-center">
      <Title
        unstyled
        order={2}
        className="lg:text-[64px] text-5xl font-bold text-gray-900"
      >
        Time Spent Building as a Developer
      </Title>
        <Box className="flex flex-col gap-6 lg:gap-12">
            <Box className="flex w-full gap-6 flex-wrap justify-center">
            {[
            { label: "Years", value: time.years },
            { label: "Days", value: time.days },
            { label: "Hours", value: time.hours },
            { label: "Minutes", value: time.minutes },
            { label: "Seconds", value: time.seconds },
            ].map(({ label, value }) => (
            <Box
                key={label}
                className="flex flex-col items-center px-3 py-2 lg:px-6 lg:py-4 rounded-xl bg-gray-100 shadow-lg shadow-gray-150"
            >
                <span className="text-xl lg:text-[152px] font-mono font-bold text-[#1B1B1B]">
                {String(value).padStart(2, "0")}
                </span>
                <span className="text-xs lg:text-sm uppercase tracking-wide text-[#1B1B1B]">
                {label}
                </span>
            </Box>
            ))}
            </Box>
            <Text unstyled className=" text-[#1B1B1B] text-lg">
                Started March 2024 · Still counting
            </Text>
        </Box>
      
    </Box>
  );
}
