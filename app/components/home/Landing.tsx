"use client";
import { Box, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import DeveloperCLock from "./components/developerClock";

export default function Landing() {
  const [eatenDots, setEatenDots] = useState<number[]>([]);
  const [pacmanPosition, setPacmanPosition] = useState(0);
  const [ghostsConfig, setGhostsConfig] = useState([
    { color: "red", offset: 7 },
    { color: "pink", offset: 11 },
    { color: "cyan", offset: 15 },
    { color: "orange", offset: 19 },
  ]);

  const [dotCount, setDotCount] = useState(20);
  const [dotScale, setDotScale] = useState(1);

  const dots = Array.from({ length: dotCount });

  useEffect(() => {
    const updateResponsiveValues = () => {
      const width = window.innerWidth;

      if (width <= 425) {
        setDotCount(6);
        setDotScale(0.7);
        setGhostsConfig([
          { color: "red", offset: 22 },
          { color: "pink", offset: 32 },
          { color: "cyan", offset: 42 },
          { color: "orange", offset: 52 },
        ]);
      } else if (width <= 768) {
        setDotCount(8);
        setDotScale(0.8);
        setGhostsConfig([
          { color: "red", offset: 14 },
          { color: "pink", offset: 20 },
          { color: "cyan", offset: 26 },
          { color: "orange", offset: 32 },
        ]);
      } else {
        setDotCount(12);
        setDotScale(1);
        setGhostsConfig([
          { color: "red", offset: 9 },
          { color: "pink", offset: 14 },
          { color: "cyan", offset: 19 },
          { color: "orange", offset: 24 },
        ]);
      }
    };

    updateResponsiveValues();
    window.addEventListener("resize", updateResponsiveValues);
    return () => window.removeEventListener("resize", updateResponsiveValues);
  }, []);

  useEffect(() => {
    const totalDuration = 12000;
    const startTime = Date.now();
    const numberOfDots = dots.length;

    const dotPositions = dots.map((_, index) => {
      return ((index + 0.5) / numberOfDots) * 100;
    });

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % totalDuration) / totalDuration;
      const currentPosition = progress * 100;

      setPacmanPosition(currentPosition);

      const newEatenDots: number[] = [];
      const vacuumOffset = 1.2;

      dotPositions.forEach((dotPos, index) => {
        if (currentPosition >= dotPos - vacuumOffset) {
          newEatenDots.push(index);
        }
      });

      setEatenDots(newEatenDots);

      if (progress >= 0.99) {
        setEatenDots([]);
      }

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [dotCount]);

  const getGhostPosition = (offset: number): number => {
    let position = pacmanPosition - offset;
    if (position < 0) position += 100;
    return position;
  };

  return (
    <Box className="w-full flex flex-col relative">
      <Box className="lg:h-screen h-[80vh] w-full relative px-6 lg:px-16 flex items-center justify-center overflow-hidden border-gray-500 border-b-2">
        <Box className="w-full flex flex-col gap-12">
          <Box className="w-full flex justify-center items-center">
            <Title
              unstyled
              order={1}
              className="lg:text-[128px] text-7xl font-black text-center text-[#1B1B1B]"
            >
              KIRTI SAUMYA JOSHI
            </Title>
          </Box>

          <Box className="relative w-full h-32">
            <Box className="absolute inset-0 flex justify-around items-center">
              {dots.map((_, index) => {
                const isEaten = eatenDots.includes(index);

                return (
                  <Box
                    key={index}
                    className="transition-all duration-300"
                    style={{
                      width: `${10 * dotScale}px`,
                      height: `${10 * dotScale}px`,
                      backgroundColor: "#5a5a5a",
                      opacity: isEaten ? 0 : 1,
                      transform: isEaten ? "scale(0)" : "scale(1)",
                    }}
                  />
                );
              })}
            </Box>

            <Box
              className="absolute top-1/2"
              style={{
                left: `${pacmanPosition}%`,
                transform: "translate(-50%, -50%) scale(2)",
                transition: "none",
              }}
            >
              <Box className="pacman">
                <Box className="offset-pacman" />
              </Box>
            </Box>

            {ghostsConfig.map((ghost, idx) => {
              const ghostPosition = getGhostPosition(ghost.offset);

              return (
                <Box
                  key={idx}
                  className="absolute top-1/2"
                  style={{
                    left: `${ghostPosition}%`,
                  }}
                >
                  <Box
                    className="ghost-body"
                    style={{ background: ghost.color }}
                  >
                    <Box className="ghost-eyes">
                      <Box className="ghost-eye left" />
                      <Box className="ghost-eye right" />
                    </Box>
                    <Box className="ghost-pupils">
                      <Box className="ghost-pupil left" />
                      <Box className="ghost-pupil right" />
                    </Box>
                    <Box className="ghost-skirt">
                      <Box className="skirt-point" />
                      <Box className="skirt-point" />
                      <Box className="skirt-point" />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
        <DeveloperCLock/>
    </Box>
  );
}
