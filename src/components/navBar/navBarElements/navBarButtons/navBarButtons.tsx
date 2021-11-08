import React from "react";
import { NavLink } from "react-router-dom";
import "./navBarButtons.css";

interface Props {
  browserSmallerWidth: boolean;
}

export const NavBarButtons: React.FC<Props> = ({ browserSmallerWidth }) => {
  return (
    <>
      {!browserSmallerWidth ? (
        <NavLink to="callus" className="navBarLinks">
          <div className="callUsNavBar">
            <p className="callusText">إتصل بنا</p>
            <p className="underLine"></p>
          </div>
          <NavLink to="categories" className="categoriesNavBar">
            <p className="categoriesText">التصنيفات</p>
            <p className="underLine"></p>
          </NavLink>
          <NavLink to="/" className="homePageNavBar">
            <p className="homePageText">الصفحة الرئيسة</p>
            <p className="underLine"></p>
          </NavLink>
        </NavLink>
      ) : null}
    </>
  );
};
