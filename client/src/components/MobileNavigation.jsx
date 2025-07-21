import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaXmark } from "react-icons/fa6";

const MobileNavigation = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen z-[99999]">
        <div
          className={`glass-container flex items-center h-screen justify-center glass-container--rounded px-4 py-3 transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div
            className="glass-filter"
            style={{ backdropFilter: "blur(20px)" }}
          ></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <div className="glass-content glass-content--inline flex-col justify-center">
            <div className="nav-menus flex-col flex gap-8">
              <div className="flex items-center justify-end">
                <FaXmark
                  onClick={() => setIsOpen(false)}
                  size={22}
                  color="#fff"
                />
              </div>
              <Link
                to="/"
                className="uppercase text-3xl hover:text-tertiary_color transition duration-50"
              >
                Home
              </Link>
              <Link
                to="/showroom"
                className="uppercase text-3xl hover:text-tertiary_color transition duration-50"
              >
                Showroom
              </Link>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">
                    Services <span className="ms-4">+</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="flex flex-col gap-4">
                  <Link
                    to="/acquisition"
                    className="uppercase text-white text-xl hover:text-tertiary_color transition duration-50"
                  >
                    Acquisition
                  </Link>
                  <Link
                    to="/brokerage"
                    className="uppercase text-white text-xl hover:text-tertiary_color transition duration-50"
                  >
                    Brokerage
                  </Link>
                </AccordionDetails>
              </Accordion>
              <Link
                to="/skynet"
                className="uppercase text-3xl hover:text-tertiary_color transition duration-50"
              >
                Skynet
              </Link>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Link to="/about">
                    <Typography component="span">
                      ABOUT MA <span className="ms-4">+</span>
                    </Typography>
                  </Link>
                </AccordionSummary>
                <AccordionDetails className="flex flex-col gap-4">
                  <Link
                    to="/team"
                    className="uppercase text-white text-xl hover:text-tertiary_color transition duration-50"
                  >
                    Meet The Team
                  </Link>
                  <Link
                    to="/higher"
                    className="uppercase text-white text-xl hover:text-tertiary_color transition duration-50"
                  >
                    Looking For Higher
                  </Link>
                  <Link
                    to="/testimonial"
                    className="uppercase text-white text-xl hover:text-tertiary_color transition duration-50"
                  >
                    Testimonials
                  </Link>
                </AccordionDetails>
              </Accordion>
              <Link
                to="/contact"
                className="uppercase text-3xl hover:text-tertiary_color transition duration-50"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
