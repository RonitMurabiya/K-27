import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const NavbarContext = createContext();
export const NavcolorContext = createContext();

const NavContext = ({ children }) => {
  const [NavOpen, setNavOpen] = useState(false);
  const [navcolor, setNavcolor] = useState("white");

  const locate = useLocation().pathname;
  useEffect(
    function () {
      if (locate == "/projects" || locate == "/agence") {
        setNavcolor("black");
      } else {
        setNavcolor("white");
      }
    },
    [locate]
  );

  return (
    <div>
      <NavbarContext.Provider value={[NavOpen, setNavOpen]}>
        <NavcolorContext.Provider value={[navcolor, setNavcolor]}>
          {children}
        </NavcolorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
