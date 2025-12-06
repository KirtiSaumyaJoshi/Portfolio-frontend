"use client";
import { Box, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import CssLogo from '../../assets/css-3.svg';
import HtmlLogo from '../../assets/html-1.svg';
import NextLogo from '../../assets/next-js.svg';
import JavaLogo from '../../assets/javascript-1.svg';
import NodeLogo from '../../assets/nodejs.svg';
import ReactLogo from '../../assets/reactjs.svg';

export default function Landing() {
  const [eatenLogos, setEatenLogos] = useState<number[]>([]);
  const [pacmanPosition, setPacmanPosition] = useState(0);
  const [ghostsConfig, setGhostsConfig] = useState([
    { color: "red", offset: 7 },
    { color: "pink", offset: 11 },
    { color: "cyan", offset: 15 },
    { color: "orange", offset: 19 },
  ]);
  const logos = [
    { src: HtmlLogo, alt: "HTML Logo" },
    { src: CssLogo, alt: "CSS Logo" },
    { src: JavaLogo, alt: "JavaScript Logo" },
    { src: NextLogo, alt: "Next.js Logo" },
    { src: NodeLogo, alt: "Node.js Logo" },
    { src: ReactLogo, alt: "React Logo" },
  ];
  const [logoScale, setLogoScale] = useState(1);

useEffect(() => {
  const updateResponsiveValues = () => {
    const width = window.innerWidth;

    if (width <= 400) {
      setGhostsConfig([
        { color: "red", offset: 18 },
        { color: "pink", offset: 26 },
        { color: "cyan", offset: 34 },
        { color: "orange", offset: 42 },
      ]);
      setLogoScale(0.7);
    } 
    else if (width <= 768) {
      setGhostsConfig([
        { color: "red", offset: 14 },
        { color: "pink", offset: 20 },
        { color: "cyan", offset: 26 },
        { color: "orange", offset: 32 },
      ]);
      setLogoScale(0.8);
    } 
    else {
      setGhostsConfig([
        { color: "red", offset: 7 },
        { color: "pink", offset: 11 },
        { color: "cyan", offset: 15 },
        { color: "orange", offset: 19 },
      ]);
      setLogoScale(1);
    }
  };

  updateResponsiveValues();
  window.addEventListener("resize", updateResponsiveValues);
  return () => window.removeEventListener("resize", updateResponsiveValues);
}, []);

useEffect(() => {
    
    const totalDuration = 12000;
    const startTime = Date.now();
    const numberOfLogos = logos.length;

    const logoPositions = logos.map((_, index) => {
      return ((index + 0.5) / numberOfLogos) * 100;
    });

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % totalDuration) / totalDuration;
      const currentPosition = progress * 100; 
      
      setPacmanPosition(currentPosition);

      const newEatenLogos: number[] = [];
      
      const vacuumOffset = 1.8; 

      logoPositions.forEach((logoPos, index) => {

        if (currentPosition >= logoPos - vacuumOffset) {
          newEatenLogos.push(index);
        }
      });
      setEatenLogos(newEatenLogos);

      if (progress >= 0.99) {
         setEatenLogos([]);
      }

      const animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);

  }, [logos.length]);

const getGhostPosition = (offset: number): number => {
    let position = pacmanPosition - offset;
    if (position < 0) {
      position += 100; 
    }
    return position;
  };

  return (
    <Box className="w-full flex flex-col relative">
      <Box className="lg:h-screen h-[60vh]  w-full relative flex items-center justify-center overflow-hidden">
        <Box className="w-full">
      
          <Box className="w-full flex justify-center items-center">
            <Title unstyled order={1} className="lg:text-[148px] text-5xl font-black text-center">
              Kirti Saumya Joshi.
            </Title>
          </Box>

          <Box className="relative w-full h-32">
            <Box className="absolute inset-0 flex justify-around items-center ">
              {logos.map((logo, index) => {
                const isEaten = eatenLogos.includes(index);
                return (
                  <Box
                    key={index}
                    className="transition-all duration-300" 
                    style={{
                            width: `${50 * logoScale}px`,
                            height: `${50 * logoScale}px`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: isEaten ? 0 : 1,
                            transform: isEaten ? `scale(0)` : `scale(${logoScale})`,
                          }}
                  >
                    <Image
                      className="w-full h-full"
                      src={logo.src}
                      alt={logo.alt}
                      style={{ transition: 'none' }} 
                    />
                  </Box>
                );
              })}
            </Box>

            <Box
              className="absolute top-1/2"
              style={{
                left: `${pacmanPosition}%`, 
                transform: `translateY(-50%) translateX(-50%) scale(2)`,
                transition: "none", 
              }}
            >
              <Box className="pacman">
                <Box className="offset-pacman"></Box>
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
                        style={{ background: ghost.color }}>
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
                );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}