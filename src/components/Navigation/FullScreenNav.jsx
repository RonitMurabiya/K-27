import React, { useContext } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../contexts/NavContext";

const FullScreenNav = () => {
  const pageLinkRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [NavOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreen", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }

  function gsapAnimationreverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreen", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (NavOpen) {
        gsapAnimation();
      } else {
        gsapAnimationreverse();
      }
    },
    [NavOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      className="fullscreen w-full h-screen absolute z-50 bg-black overflow-x-hidden"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-slate-950"></div>
          <div className="stairing h-full w-1/5 bg-slate-950"></div>
          <div className="stairing h-full w-1/5 bg-slate-950"></div>
          <div className="stairing h-full w-1/5 bg-slate-950"></div>
          <div className="stairing h-full w-1/5 bg-slate-950"></div>
        </div>
      </div>
      <div ref={pageLinkRef} className="relative">
        <div className="navlink flex w-full justify-between items-start">
          <div className=" pt-3 pl-2">
            <svg
              className="lg:w-[7.7vw] w-[30vw]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-32 h-50 lg:w-30 w-24 pt-2  relative flex cursor-pointer "
          >
            <div className="lg:h-[24vh] h-[22vh] w-[2px] absolute origin-top bg-[#D3FD50] -rotate-45"></div>
            <div className="lg:h-[24vh] h-[22vh] w-[2px] absolute origin-top right-0 bg-[#D3FD50] rotate-45"></div>
          </div>
        </div>
        <div id="links" className="">
          <div
            id="project "
            className="project link origin-top relative border-t-1 border-white "
          >
            <h1 className=" font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-white uppercase">
              Projets
            </h1>
            <div className=" moveLink flex absolute top-0 transition-all duration-300 bg-[#D3FD50]">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tou
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/WS---K72.ca---MenuThumbnail.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/PJC_SiteK72_Thumbnail_640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            id="project "
            className="link project origin-top relative border-t-1 border-white "
          >
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-white uppercase">
              agence
            </h1>
            <div className=" moveLink flex absolute top-0 transition-all duration-300 bg-[#D3FD50]">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/Michele_640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/SophieA_640X290.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/Michele_640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/SophieA_640X290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            id="project "
            className="link project origin-top relative border-t-1 border-white "
          >
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-white uppercase">
              contact
            </h1>
            <div className=" moveLink flex absolute top-0 transition-all duration-300 bg-[#D3FD50]">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour envoyer un fax
                </h2>
                <svg
                  className="h-[17vh] w-[8vw]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour envoyer un fax
                </h2>
                <svg
                  className="h-[17vh] w-[8vw]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour envoyer un fax
                </h2>
                <svg
                  className="h-[17vh] w-[8vw]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Pour envoyer un fax
                </h2>
                <svg
                  className="h-[17vh] w-[8vw]"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            id="project "
            className="link origin-top relative border-y-1 border-white "
          >
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-white uppercase">
              blogue
            </h1>
            <div className=" moveLink flex absolute top-0 transition-all duration-300 bg-[#D3FD50]">
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Lire les articles
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/ier.com-16107673482102220.gif"
                  alt=""
                />
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Lire les articles
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX">
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Lire les articles
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/ier.com-16107673482102220.gif"
                  alt=""
                />
                <h2 className="whitespace-nowrap px-6 font-[font2] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 text-center text-black uppercase">
                  Lire les articles
                </h2>
                <img
                  className="w-64 shrink-0 object-cover rounded-full h-24"
                  src="/assets/photos/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
