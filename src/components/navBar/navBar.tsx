import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
//icons
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
//components
import { Logo } from "./navBarElements/logo/Logo";
import { NavBarButtons } from "./navBarElements/navBarButtons/navBarButtons";
import { CartAmount } from "./navBarElements/cartAmount/CartAmount";

interface Props {
  sideBarIsActive: string;
  setSideBarIsActive: React.Dispatch<React.SetStateAction<any>>;
}

export const NavBar: React.FC<Props> = ({
  setSideBarIsActive,
  sideBarIsActive,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [browserSmallerWidth, setBrowserSmallerWidth] = useState(false);

  //set width of window to state
  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  //cases to change our navbar when a specific width apply
  useEffect(() => {
    if (width < 1000) {
      setBrowserSmallerWidth(true);
    } else {
      setBrowserSmallerWidth(false);
    }
  }, [width]);

  //apply an animation when we scroll down
  const [navBarContainerClass, setNavBarContainerClass] =
    useState("navBarContainer");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > 130;
      if (isTop) {
        setNavBarContainerClass("navBarContainerSticky");
      } else {
        setNavBarContainerClass("navBarContainer");
      }
    });
  }, []);
  return (
    <>
      {!browserSmallerWidth ? (
        <div className={navBarContainerClass}>
          <CartAmount
            browserSmallerWidth={browserSmallerWidth}
            sideBarIsActive={sideBarIsActive}
            setSideBarIsActive={setSideBarIsActive}
          />
          {/* home page categories callus buttons */}
          <NavBarButtons browserSmallerWidth={browserSmallerWidth} />
          {/* navBar normal screen's logo */}
          <Logo browserSmallerWidth={browserSmallerWidth} />
        </div>
      ) : (
        <div className="mobileNavBarContainer">
          <Logo browserSmallerWidth={browserSmallerWidth} />
          <CartAmount
            browserSmallerWidth={browserSmallerWidth}
            sideBarIsActive={sideBarIsActive}
            setSideBarIsActive={setSideBarIsActive}
          />

          <div className="hamburgerBarContainer">
            <GiHamburgerMenu size="1.5em" />
          </div>
        </div>
      )}
    </>
  );
};
