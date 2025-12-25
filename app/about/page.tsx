import { Box, Text } from "@mantine/core";
import Image from "next/image";
import Utas from "../assets/Utas.svg"
import TU from "../assets/TU.png"
import Company from "../assets/techaxis.webp"
export default function About() {
return (
    <Box className="w-full px-8 py-8 flex flex-col gap-8">
      <Box className="flex justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
          About me
        </h1>
      </Box>
      <Box className="flex lg:flex-row flex-col gap-12">
        <Box className="lg:w-1/2 relative border-2 border-gray-500 bg-amber-300 rounded-lg h-fit">
          <Box className="flex flex-col gap-6 translate-x-3 translate-y-3 border-2 border-gray-900 p-4 md:p-8  w-full bg-white shadow-gray-600 shadow-lg rounded-lg h-full">
              <h2 className="text-2xl font-bold text-gray-800">
                Education
              </h2>
              <Box className="bg-gray-100 p-4 rounded-lg">
                <Box className="clearfix">
                  <Box className="float-left mr-3 rounded-md p-1 border shadow-lg border-black md:w-20 md:h-20 md:min-w-20 md:max-w-20 min-w-16 max-w-16 h-16">
                    <Image
                      className="w-full h-full object-contain"
                      alt="UTAS Logo"
                      src={Utas}
                    />
                  </Box>

                  <Box>
                    <Box className="text-md font-bold">
                      Master of Information Technology and Systems
                    </Box>
                    <Box className="flex flex-col md:flex-row md:justify-between">
                        <a
                          className="hover:text-blue-600 italic underline"
                          target="_blank"
                          href="https://www.utas.edu.au/courses/sci-eng/courses/k7i-master-of-information-technology-and-systems?year=2026"
                        >
                          University of Tasmania
                        </a>
                        <Text>
                        Jul 2025 - Ongoing
                        </Text>
                    </Box>
                    
                    <Text unstyled className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Focused on advanced software engineering, systems design, data management,
                      and human-computer interaction, with an emphasis on practical, industry-aligned projects.
                      Developed skills in research-driven problem solving, system analysis, and architectural decision-making.
                      Engaged in collaborative coursework involving real-world case studies, prototyping, and technical documentation.
                    </Text>

                  </Box>
                </Box>
              </Box>

              <Box className="bg-gray-100 p-4 rounded-lg">
                <Box className="clearfix">
                  <Box className="float-left mr-3 rounded-md p-1 border shadow-lg border-black md:w-20 md:h-20 md:min-w-20 md:max-w-20 min-w-16 max-w-16 h-16">
                    <Image
                      className="w-full h-full object-contain"
                      alt="TU Logo"
                      src={TU}
                    />
                  </Box>

                  <Box>
                    <Box className="text-md font-bold">
                      Bachelor of Science in Computer Science and Information Technology
                    </Box>
                    
                    <Box className="flex flex-col md:flex-row md:justify-between">
                        <a
                          target="_blank"
                          href="https://tu.edu.np/"
                          className="hover:text-blue-600 italic underline"
                        >
                          Tribhuvan University
                        </a>
                        <Text>
                        Jul 2019 - Apr 2024
                        </Text>

                    </Box>
                    <Text unstyled className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Built a strong foundation in programming, data structures, databases,
                      and web technologies, complemented by academic projects and teamwork-driven development.
                      Gained hands-on experience with full-stack application development and software lifecycle concepts.
                      Strengthened analytical thinking and debugging skills through problem-solving and project-based learning.
                    </Text>

                  </Box>
                </Box>
              </Box>

          </Box>
          
        </Box>
        <Box className="lg:w-1/2 relative border-2 border-gray-900 bg-blue-300 rounded-lg h-fit">
          <Box className="flex flex-col gap-6 translate-x-3 translate-y-3 p-8  w-full bg-white border-2 border-gray-900 shadow-gray-600 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">
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