import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stair = (props) => {
  const currentPath = useLocation().pathname;
  const stairParents = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.to(stairParents.current, {
        display: "block",
      });

      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });

      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });

      tl.to(stairParents.current, {
        display: "none",
      });

      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        delay: 1.3,
        scale: 1.2,
      });
    },
    [currentPath]
  );

  return (
    <div>
      <div ref={stairParents} className="h-screen w-full fixed z-10 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={contentRef}>{props.children}</div>
    </div>
  );
};

export default Stair;
