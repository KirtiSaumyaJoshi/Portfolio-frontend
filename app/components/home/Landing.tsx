"use client";
import { Box } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Landing() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const updatePath = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const road1Y = 0;
      const road3Y = height * 0.2;
      const road5Y = height * 0.7;
      const road7Y = height;

      const road2X = width * 0.65;
      const road4X = width * 0.5;
      const road6X = width * 0.35;

      const newPath = `M 0 ${road1Y} L ${road2X} ${road1Y} L ${road2X} ${road3Y} L ${road4X} ${road3Y} L ${road4X} ${road5Y} L ${road6X} ${road5Y} L ${road6X} ${road7Y} L ${width * 0.95} ${road7Y}`;
      setPath(newPath);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  const ghosts = [
    { color: "red", delay: 0.6  }, 
    { color: "pink", delay: 0.9 },
    { color: "cyan", delay: 1.2 },
    { color: "orange", delay: 1.5 },
  ];

  return (
    <Box className="w-full flex flex-col relative">
      <Box className="h-screen w-full relative">
        {path && (
        <Box className="absolute inset-0 pointer-events-none">       
          <Box
            className="absolute pacman"
            style={{
              offsetPath: `path('${path}')`,
              offsetRotate: "auto",
              animation: "moveAlongRoad 20s linear infinite",
              transform: "scale(1.3)", 
              transformOrigin: "top center", 
            }}>
            <Box className="offset-pacman"></Box>
          </Box>

          {ghosts.map((ghost, idx) => (
            <Box
              key={idx}
              className="absolute top-2 ghost"
              style={{
                offsetPath: `path('${path}')`,
                offsetRotate: "0deg",
                animation: `moveAlongRoad 20s linear infinite, colourSwap 0.5s linear infinite`,
                animationDelay: `${ghost.delay}s`,
                transform: "scale(0.9)", 
              transformOrigin: "top center", 
              }}
            >
              <Box className="ghost-body" 
              style={{
                background: ghost.color,
                transform: "scale(0.85)",
                transformOrigin: "top center", 
              }}>
                <Box className="ghost-eyes">
                  <Box className="ghost-eye left"></Box>
                  <Box className="ghost-eye right"></Box>
                </Box>
                <Box className="ghost-pupils">
                  <Box className="ghost-pupil left"></Box>
                  <Box className="ghost-pupil right"></Box>
                </Box>
                <Box className="ghost-skirt">
                  <Box className="skirt-point"></Box>
                  <Box className="skirt-point"></Box>
                  <Box className="skirt-point"></Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
        <Box className="w-full h-[20%] flex justify-between items-center ">
            <Box className="w-[65%] h-full flex items-center justify-center">
              <h1 className="banner">Kirti Saumya Joshi</h1>
            </Box>
          <Box className="w-[35%] h-full flex items-center justify-center text-4xl font-bold lowercase p-6">
            
          </Box>
        </Box>
        <Box className="w-full h-[50%] flex justify-between items-center">
          <Box className="w-[50%] h-full flex">
            <Box className="bg-amber-400 h-full w-[75%] z-40 rounded-r-[164px] flex justify-start items-center">
                <Box className="border-b-8 border-r-8 border-t-8 border-amber-50 w-[90%] h-[80%] rounded-r-[164px]">
                  
                </Box>
            </Box>
            <Box className="z-50 absolute w-[75%] h-[50%]">
              <Box className="flex justify-center items-center w-full h-full">
                <h1 className="text-center">
                Building intuitive<br/> and engaging <br/> web experiences
                </h1>
              </Box>
              
            </Box>
            
          </Box>
          <Box className="w-[50%] h-full flex items-center justify-center">
              
          </Box>
        </Box>
        <Box className="w-full h-[30%] flex justify-between items-center">
          <Box className="w-[35%] h-full flex items-center justify-center text-4xl font-bold">5</Box>
          <Box className="w-[65%] h-full flex items-center justify-center text-4xl font-bold">6</Box>
        </Box>
      </Box>
    </Box>
  );
}
