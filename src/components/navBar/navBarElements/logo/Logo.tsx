import React from "react";
import { NavLink } from "react-router-dom";
import carvataLogo from "../../../../images/logo_cartvata.jpg";
import "./Logo.css";

interface Props {
  browserSmallerWidth: boolean;
}

export const Logo: React.FC<Props> = ({ browserSmallerWidth }) => {
  return (
    <>
      {!browserSmallerWidth ? (
        <NavLink to="/" className="navBarLogo">
          <img
            className="carvataNavBarLogo"
            src={carvataLogo}
            alt="carvata logo"
          />
        </NavLink>
      ) : (
        <div className="mobileNavBarLogoContainer">
          <img
            className="mobileNavBarLogo"
            src={carvataLogo}
            alt="carvata logo"
          />
        </div>
      )}
    </>
  );
};
