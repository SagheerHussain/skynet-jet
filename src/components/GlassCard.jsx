import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";

export default function GlassCard({ icon, title, description, buttonLabel }) {
  // Split heading text into characters
  const headingOne = "Turbulence";
  const headingTwo = "Free";
  const headingThree = "Transactions";
  const charsOne = headingOne.split("");
  const charsTwo = headingTwo.split("");
  const charsThree = headingThree.split("");

  const charsRefOne = useRef([]);
  const charsRefTwo = useRef([]);
  const charsRefThree = useRef([]);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      charsRefOne.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      charsRefTwo.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        delay: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      charsRefThree.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        delay: 1.5,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    // Paragraph + Button fade & slide up with delay
    gsap.fromTo(
      [paraRef.current, buttonRef.current],
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 3, // starts after heading animation
        ease: "power2.out",
        stagger: 0.5, // button animates 0.5s after para
      }
    );
  }, []);

  return (
    <div className="w-full lg:py-0 py-8 h-[calc(60vh)] lg:h-[90vh] xl:h-[calc(90vh-120px)] 2xl:h-[calc(90vh-150px)] 3xl:h-[calc(90vh-270px)] text-white">
      <div className="liquid-glass flex flex-col justify-center" style={{ padding: "20px 40px" }}>
        <div className="liquid-glass--bend" />
        <div className="liquid-glass--face" />
        <div className="liquid-glass--edge" />
        {/* Animated Heading */}
        <h2 className="text-[2rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold uppercase text-start leading-[1.2] drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] flex flex-wrap">
          {charsOne.map((char, i) => (
            <span
              key={i}
              ref={(el) => (charsRefOne.current[i] = el)}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h2>
        <h2 className="text-[2rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold uppercase text-start leading-[1.2] drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] flex flex-wrap">
          {charsTwo.map((char, i) => (
            <span
              key={i}
              ref={(el) => (charsRefTwo.current[i] = el)}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h2>
        <h2 className="text-[2rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold uppercase text-start leading-[1.2] drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] flex flex-wrap">
          {charsThree.map((char, i) => (
            <span
              key={i}
              ref={(el) => (charsRefThree.current[i] = el)}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h2>

        {/* Description */}
        <p
          ref={paraRef}
          className="text-[.8rem] md:text-[1rem] py-3 text-start text-white/70 opacity-100"
        >
          INDUSTRY-LEADING MARKETING, DATA, AND GRIT TO HELP YOU BUY OR SELL
        </p>

        {/* Button */}
        <div ref={buttonRef} className="text-start">
          <Button buttonLabel="Visit Showroom" />
        </div>
      </div>
    </div>
  );
}
