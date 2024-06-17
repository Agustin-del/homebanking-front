import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  
  const isDesktop = useMediaQuery({minWidth:1024})

  const links = {
    phoneNumber: "0-800-16337",
    linkedin: "https://www.linkedin.com/in/edmundo-r%C3%BAveda-5350b42a1/"
  }

  return (
    <footer className="h-[13vh] lg:h-[12vh] bg-blue-500 flex justify-beetween items-center">
          <div className="w-1/2">
            <p className="p-4 text-[15px] text-center lg:text-base lg:text-left">&copy; 2024 Andes Net Bank. All rights reserved.</p>
          </div>
          <div className="w-1/2 flex items-center gap-4 justify-end px-4">
            <a href={`tel: ${links.phoneNumber}`} className="text-center lg:text-left text-xs lg:text-base lg:w-1/3 flex flex-col lg:flex-row items-center gap-2">
              <IoLogoWhatsapp className="size-8"/>
              <p>0-800-16337 (Andes)</p>
            </a>
            <a href={links.linkedin} target="_blank" className="text-xs lg:text-base flex flex-col items-center lg:flex-row gap-2">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-1 items-center ">
                <FaLinkedin className="size-8"/>
                <p className="text-center lg:text-left">Edmundo Rúveda</p>
              </div>
            </a>
          </div>
    </footer>
  )
}
