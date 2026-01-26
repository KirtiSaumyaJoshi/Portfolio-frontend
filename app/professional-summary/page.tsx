import { Box, Text } from "@mantine/core";
import Image from "next/image";

import Company from "../assets/techaxis.webp"
export default function ProfessionalSummary() {
return (
    <Box className="w-full px-6 md:px-8 py-8 flex flex-col gap-8 bg-[#f7f7fc]">
      <Box className="flex flex-col justify-center text-center gap-3">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
          Professional Summary
        </h1>
        <Text unstyled className="text-lg font-medium">
          Design-minded developer crafting clean, intuitive web experiences.
        </Text>
      </Box>
      <Box className="flex flex-col gap-12">
        
        <Box className="relative border-2 border-gray-900 bg-blue-300 rounded-lg h-fit">
          <Box className="flex flex-col gap-6 translate-x-3 translate-y-3 p-8  w-full bg-white border-2 border-gray-900 shadow-gray-600 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-[#1B1B1B]">
                Experience
              </h2>
              <Box className="bg-gray-100 p-4 rounded-lg">
                <Box className="clearfix">
                  <Box className="float-left mr-3 rounded-md p-1 border shadow-lg border-black md:w-20 md:h-20 md:min-w-20 md:max-w-20 min-w-16 max-w-16 h-16">
                    <Image className="w-full h-full object-contain" alt="Company logo" src={Company} />
                  </Box>

                  <Box>
                    <Box className="text-md font-bold">
                      Jr. Web App Developer 
                      
                    </Box>
                    <Box className="flex flex-col md:flex-row md:justify-between">
                        <a
                          target="_blank"
                          href="https://techaxis.com.np/"
                          className="hover:text-blue-600 italic underline"
                        >
                          TechAxis Pvt. Ltd.
                        </a>
                        <Text>
                        Mar 2024 - May 2025
                        </Text>
                    </Box>
                    
                    <Text unstyled className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Contributed to the development of responsive web applications by building reusable UI components, integrating REST APIs, and collaborating with senior developers, designers, and QA teams to improve performance, fix bugs, and deliver high-quality, user-focused features using React, Next.js, Node.js, and modern CSS frameworks.
                    </Text>

                    
                  </Box>
                </Box>
              </Box>

          </Box>
          
        </Box>
      </Box>
    </Box>
  );

}