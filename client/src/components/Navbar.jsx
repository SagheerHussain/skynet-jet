import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { TbMenu } from "react-icons/tb";
import GlassNavbar from "./GlassNavbar";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 text-white flex items-center justify-between z-20 h-[10vh] pt-4">
      <div className="logo z-[20]">
        <Link to={"/"}>
          <img
            src={
              "https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_180,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%201x,%20https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_360,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%202x"
            }
            className="w-40"
            alt=""
          />
        </Link>
      </div>
      <GlassNavbar />
      <div className="flex items-center call-to-action z-[999]">
        <SearchBox />
        <TbMenu onClick={() => setIsOpen(true)} size={40} className="ms-4 xl:hidden block" color="#fff" />
        {isOpen && <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;