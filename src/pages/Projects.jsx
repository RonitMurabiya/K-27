import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1: "public/assets/photos/PJC_SiteK72_Thumbnail_1280x960.jpg",
      image2: "public/assets/photos/WS---K72.ca---Thumbnail.jpg",
    },
    {
      image1: "public/assets/photos/OKA_thumbnail.jpg",
      image2: "public/assets/photos/opto_thumbnail2.jpg",
    },
    {
      image1: "public/assets/photos/CF_thumbnail.jpg",
      image2: "public/assets/photos/thumbnailimage_shelton.jpg",
    },
    {
      image1: "public/assets/photos/BEST_site_menu_Thumbnail.jpg",
      image2: "public/assets/photos/thumbnailimage_atable2.jpg",
    },
    {
      image1: "public/assets/photos/thumbnailimage_SollioAg.jpg",
      image2: "public/assets/photos/chalaxeur-thumbnail_img.jpg",
    },
    {
      image1: "public/assets/photos/thumbnail_OSM_1280.jpg",
      image2: "public/assets/photos/100temps_Thumbnail.jpg",
    },
    {
      image1: "public/assets/photos/crisis24_behance_1920X1200_cartes.jpg",
      image2: "public/assets/photos/thumbnailimage_opto.jpg",
    },
    {
      image1: "public/assets/photos/PME-MTL_Thumbnail.jpg",
      image2: "public/assets/photos/Fruite_thumbnail_bbq.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".card", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".parentCard",
        start: "top 82%",
        end: "top -150%",
        scrub: true,
      },
    });
  });
  1;
  return (
    <div className="bg-white h-full p-4">
      <div className="pt-[39vh] ">
        <h2 className="font-[font2]  lg:text-[13vw] text-[20vw] uppercase text-bold">
          Projets
        </h2>
      </div>
      <div className="lg:-mt-20 -mt-8 parentCard">
        {projects.map(function (elem) {
          return (
            <div className="card w-full lg:h-[600px] h-[50px] mb-1 lg:flex-row flex-col flex p-1 gap-2 ">
              <ProjectsCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
