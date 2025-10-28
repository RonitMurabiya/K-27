import React from "react";
import Video from "./Video.jsx";

function HomeHeroText() {
  return (
    <div className="text-white font-[font1] lg:mt-0 mt-[36vh] text-center pt-2">
      <p className=" lg:hidden absolute lg:w-80 right-0 bottom-18 text-[12.5px] w-65 text-left">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 est une
        agence qui pense chaque action pour nourrir la marque. Demain, dans 5
        mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour
        générer de l’émotion. Pour assurer une relation honnête, on est sans
        filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <div className="lg:text-[9.5vw] lg:leading-[9vw] text-[12vw]  leading-11 flex justify-center items-center uppercase">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] lg:leading-[9vw] text-[12vw]  leading-11  flex justify-center items-center uppercase">
        qui
        <div className="lg:h-[16vh] h-[6vh] lg:rounded-full rounded-[40px] overflow-hidden ">
          <video
            className="lg:w-[17vw] w-[20vw] h-full object-cover rounded-[40px] lg:rounded-full overflow-hidden"
            src="src\assets\videos\69496b2d.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] lg:leading-[9vw] text-[12vw]   leading-13 flex justify-center items-center uppercase">
        la créativité
      </div>
    </div>
  );
}

export default HomeHeroText;
