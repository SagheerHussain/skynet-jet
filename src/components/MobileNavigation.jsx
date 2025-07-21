import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaPlus } from "react-icons/fa6";

const MobileNavigation = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen z-[99999] transition duration-200">
        <div
          className={`glass-container flex items-center justify-center glass-container--rounded px-4 py-3 ${
            isOpen ? "h-screen" : "h-0"
          } transition duration-200`}
        >
          <div
            className="glass-filter"
            style={{ backdropFilter: "blur(20px)" }}
          ></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <div className="glass-content glass-content--inline flex-col justify-center">
            <div className="nav-menus flex-col flex gap-8">
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
