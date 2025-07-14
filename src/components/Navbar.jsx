import React from "react";
import SearchBox from "./SearchBox";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="w-full px-6 text-white flex items-center justify-between z-20 h-[10vh]">
      <div className="logo pt-10 ">
        <img src="../../public/assets/logo.png 2x" className="w-60" alt="" />
      </div>
      <div
        className="nav-menus
        px-10
        py-4
        me-10
        mt-10
        rounded-[30px]
        bg-white/10
        backdrop-blur-md
        border border-white/20
        shadow-[0_0_20px_rgba(255,255,255,0.25),0_0_40px_rgba(255,255,255,0.1)]
        hidden xl:flex flex-col space-y-4
        text-white"
      >
        <ul className="flex space-x-6">
          <li className="me-3">
            <a href="" className="uppercase text-[.9rem] transition hover:text-[#ff8a41]">Showroom</a>
          </li>
          <li className="me-3">
            <a href="" className="uppercase text-[.9rem] transition hover:text-[#ff8a41]">Services +</a>
          </li>
          <li className="me-3">
            <a href="" className="uppercase text-[.9rem] transition hover:text-[#ff8a41]">Skynet</a>
          </li>
          <li className="me-3">
            <a href="" className="uppercase text-[.9rem] transition hover:text-[#ff8a41]">About MA +</a>
          </li>
          <li className="me-3">
            <a href="" className="uppercase text-[.9rem] transition hover:text-[#ff8a41]">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center call-to-action mt-10">
        <SearchBox />
        <TbMenu size={40} className="ms-4 xl:hidden block" color="#fff" />
      </div>
    </nav>
  );
}

export default Navbar;
