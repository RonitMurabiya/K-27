import React from "react";

function ProjectsCard(props) {
  return (
    <>
      <div className="lg:w-1/2 h-full relative transition-all rounded-none hover:rounded-4xl overflow-hidden group">
        <img
          className="w-full project-image h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
          src={props.image1}
          alt=""
        />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 h-full justify-center items-center flex text-center w-full bg-black/30">
          <h2 className="uppercase rounded-full border-2 px-4 pt-1 font-bold border-white text-white font-[font1] text-6xl">
            Voir le projet
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 h-full relative transition-all rounded-none hover:rounded-4xl overflow-hidden group">
        <img
          className="w-full h-full project-image object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
          src={props.image2}
          alt=""
        />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 h-full justify-center items-center flex text-center w-full bg-black/30">
          <h2 className="uppercase rounded-full border-2 px-4 pt-1 font-bold border-white text-white font-[font1] text-6xl">
            Voir le projet
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
