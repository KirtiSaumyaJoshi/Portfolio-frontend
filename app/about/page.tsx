import { Box } from "@mantine/core";
import Image from "next/image";
import Utas from "../assets/Utas.svg"
import TU from "../assets/TU.png"
import pin from "../assets/pin.jpg"
export default function About() {
return (
    <Box className="w-full px-8 py-8 flex flex-col gap-8">
      <Box className="flex justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
          About me
        </h1>
      </Box>
      <Box className="">
        <Box className="relative border-2 border-gray-500 bg-amber-300 rounded-lg min-h-fit">
          <Box className="flex flex-col gap-6 translate-x-3 translate-y-3 border-2 p-8  w-full bg-white shadow-gray-600 shadow-lg rounded-lg h-full">
              <h2 className="text-2xl font-bold text-gray-800">
                Education
              </h2>
              <Box className="flex items-center gap-4">
                <Box className="flex justify-center rounded-md items-center p-1 border shadow-lg border-black">
                  <Image className="w-16 h-16" alt={"Utas Logo"} src={Utas}/>
                </Box>
                <Box className="flex flex-col">
                  <Box className="text-md font-bold">
                    Master of Information Technology and systems
                  </Box>
                  <a target="_blank" href="https://www.utas.edu.au/courses/sci-eng/courses/k7i-master-of-information-technology-and-systems?year=2026" className="italic">
                    University of Tasmania
                  </a>
                  
                </Box>
              </Box>
              <Box className="flex items-center gap-4">
                <Box className="flex justify-center rounded-md items-center p-1 border shadow-lg border-black">
                  <Image className="w-16 h-16" alt={"TU logo"} src={TU}/>
                </Box>
                <Box className="flex flex-col">
                  <Box className="text-md font-bold">
                    Bachelors of Science in Computer Science and Information Technology
                  </Box>
                  <a target="_blank" href="https://tu.edu.np/" className="italic">
                    Tribhuvan University
                  </a>
                  
                </Box>
              </Box>
          </Box>
          <Box>
            <Image alt="pin" className="w-16 h-16" src={pin}/>
          </Box>
        </Box>

      </Box>
    </Box>
  );

}