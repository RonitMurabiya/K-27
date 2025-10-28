import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function Agence() {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imgRef = useRef(null);

  const imageArray = [
    "src/assets/photos/Carl_480x640.jpg",
    "src/assets/photos/Olivier_480x640.jpg",
    "src/assets/photos/Lawrence_480x640.jpg",
    "src/assets/photos/HugoJoseph_480x640.jpg",
    "src/assets/photos/ChantalG_480x640.jpg",
    "src/assets/photos/MyleneS_480x640.jpg",
    "src/assets/photos/SophieA_480x640.jpg",
    "src/assets/photos/Claire_480x640.jpg",
    "src/assets/photos/Michele_480X640.jpg",
    "src/assets/photos/MEL_480X640.jpg",
    "src/assets/photos/CAMILLE_480X640_2.jpg",
    "src/assets/photos/MAXIME_480X640_2.jpg",
    "src/assets/photos/MEGGIE_480X640_2.jpg",
    "src/assets/photos/joel_480X640_3.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 10%",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: true,
        onUpdate: (elem) => {
          let imageindex;
          if (elem.progress < 1) {
            imageindex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageindex = imageArray.length - 1;
          }
          imgRef.current.src = imageArray[imageindex];
        },
      },
    });
  });

  return (
    <div className="overflow-hidden">
      <div className="section-1 overflow-hidden  bg-white py-1">
        <div
          ref={imageDivRef}
          className=" absolute lg:top-52 top-25 left-[30vw] lg:h-[20vw] h-[15vh] lg:w-[15vw] w-[20vw] lg:rounded-4xl rounded-2xl overflow-hidden"
        >
          <img
            ref={imgRef}
            src="src/assets/photos/Carl_480x640.jpg"
            alt="Agence Image"
            className="object-fill "
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[59vh] mt-[28vh] lg:mb-0 mb-30">
            <h1 className="lg:text-[20vw] text-[17vw] text-center uppercase lg:leading-[17vw] leading-[14vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%]">
            <p className="lg:text-5xl text-left text-[22px] lg:leading-[7vh] leading-[4vh]">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On
              reste humbles et on dit non aux gros egos, même le vôtre. Une
              marque est vivante. Elle a des valeurs, une personnalité, une
              histoire. Si on oublie ça, on peut faire de bons chiffres à court
              terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à
              donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
        <div className="h-[10vh] bg-white"></div>
      </div>
    </div>
  );
}

export default Agence;
