import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div>
      <div className="text-white font-[font2] flex items-center justify-center  gap-5">
        <div className=" uppercase border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:h-24 border-white rounded-full px-2 lg:px-8 ">
          <Link className="text-[6vw] lg:mt-6" to="./projects">
            Projects
          </Link>
        </div>
        <div className="uppercase border-3  hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:h-24 border-white rounded-full px-2 lg:px-8 ">
          <Link className="text-[6vw] lg:mt-6" to="./agence">
            Agence
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBottomText;
