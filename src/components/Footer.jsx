import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] py-10 px-4">
      <div className="container px-5">
        <div className="flex md:flex-row flex-col justify-between gap-6">
          {/* Logo Section */}
          <div className="logo md:w-[60%] w-full">
            <Link to={"/"}>
              <img
                src={
                  "https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_180,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%201x,%20https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_360,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%202x"
                }
                className="w-60"
                alt=""
              />
            </Link>
            <p className="mt-8 text-white md:max-w-lg">
              Mason Amelia delivers advanced aviation services with precision,
              reliability, and innovation across the U.S. Proudly veteran-owned,
              we are committed to excellence in every flight and every client
              relationship.
            </p>
          </div>

          <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            {/* Company Links */}
            <div>
              <h3 className="text-tertiary_color text-xl font-semibold mb-2">
                Company
              </h3>
              <ul className="text-gray-300 space-y-1">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/showroom"}>Showroom</Link>
                </li>
                <li>
                  <Link to={"/"}>Services</Link>
                </li>
                <li>
                  <Link to={"/"}>About</Link>
                </li>
                <li>
                  <Link to={"/"}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-tertiary_color text-xl font-semibold mb-2">
                Locations:
              </h3>
              <ul className="text-gray-300 space-y-1">
                <li>
                  <Link to={"/"}>Birmingham, AL</Link>
                </li>
                <li>
                  <Link to={"/"}>Duluth, MN</Link>
                </li>
                <li>
                  <Link to={"/"}>Upstate, NY</Link>
                </li>
                <li>
                  <Link to={"/"}>San Antonio, TX</Link>
                </li>
                <li>
                  <Link to={"/"}>Scottsdale, AZ</Link>
                </li>
              </ul>
            </div>

            {/* Principal Office */}
            <div>
              <h3 className="text-tertiary_color text-xl font-semibold mb-2">
                Principal office:
              </h3>
              <p className="text-gray-300 mb-4">
                322 Boerne Stage Airfield Boerne, Texas 78006
              </p>
              <img
                src="https://static.wixstatic.com/media/04f737_cf652212a66e4f93a1dc1bf4607bd7aa~mv2.png/v1/fill/w_137,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Veteran%20Owned.png"
                alt="Veteran Owned"
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5">
        <div className="w-full mt-12 border-t border-white/20 pt-4 flex md:flex-row flex-col md:justify-between justify-center items-center gap-4 text-white text-xl">
          <p className="text-base">© 2025 Mason Amelia. All rights reserved.</p>
          <div className="social-icons flex items-center gap-4">
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
