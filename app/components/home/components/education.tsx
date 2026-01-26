import { Box, Text, Title } from "@mantine/core";
import Utas from "../../../assets/Utas.svg"
import TU from "../../../assets/TU.png"
import Image from "next/image";
export default function Education(){
    return(
    <Box className=" px-6 lg:px-16 h-screen flex flex-col gap-16 items-center justify-center bg-[#f7f7fc]">
       <Title
               unstyled
               order={2}
               className="lg:text-[64px] text-5xl font-bold text-gray-900"
             >
               Education
             </Title>
        <Box className="relative border-2 border-gray-500 bg-amber-300 rounded-lg h-fit">
          <Box className="flex flex-col gap-6 translate-x-3 translate-y-3 border-2 border-gray-900 p-4 md:p-8  w-full bg-white shadow-gray-600 shadow-lg rounded-lg h-full">
              
              <Box className="bg-[#f7f7fc] p-8 rounded-lg">
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

              <Box className="bg-gray-100 p-8 rounded-lg">
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
    </Box>
    )
}
