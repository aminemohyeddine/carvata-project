import React from "react";
import { NavLink } from "react-router-dom";
import "./CartAmount.css";

//icons
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  browserSmallerWidth: boolean;
  sideBarIsActive: string;
  setSideBarIsActive: React.Dispatch<React.SetStateAction<any>>;
}

export const CartAmount: React.FC<Props> = ({
  browserSmallerWidth,
  sideBarIsActive,
  setSideBarIsActive,
}) => {
  return (
    <>
      {!browserSmallerWidth ? (
        <div className="navBarSearchBarCart">
          <div
            className="CartAmountWithCurrency"
            onClick={() => {
              sideBarIsActive === "" || "inActive"
                ? setSideBarIsActive("active")
                : setSideBarIsActive("inActive");
            }}
          >
            <p className="currencyText">د.م</p>
            <p className="totalCartAmount">&nbsp;0</p>
          </div>
          <p
            className="shoppingIcon"
            onClick={() => {
              sideBarIsActive === "" || "inActive"
                ? setSideBarIsActive("active")
                : setSideBarIsActive("inActive");
            }}
          >
            <FiShoppingCart size="1.5em" />
          </p>
          <p className="magnifyingIcon">
            <GiMagnifyingGlass size="1.5em" />
          </p>
        </div>
      ) : (
        <div className="mobileNavBarShoppingSearchSection">
          <div className="mobileMagnifyingDiv">
            <GiMagnifyingGlass size="1.5em" />
          </div>
          <div
            className="mobileShoppingDiv"
            onClick={() => {
              sideBarIsActive === "" || "inActive"
                ? setSideBarIsActive("active")
                : setSideBarIsActive("inActive");
            }}
          >
            <FiShoppingCart size="1.5em" />
          </div>
        </div>
      )}
    </>
  );
};
