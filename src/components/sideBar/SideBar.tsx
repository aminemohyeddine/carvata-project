import React from "react";
import "./SideBar.css";
//icons
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  sideBarIsActive: string;
  setSideBarIsActive: React.Dispatch<React.SetStateAction<any>>;
}

export const SideBar: React.FC<Props> = ({
  sideBarIsActive,
  setSideBarIsActive,
}) => {
  return (
    <>
      {(() => {
        if (sideBarIsActive === "active") {
          return (
            <div className="sideBarParent">
              <div className="sideBarContainer">
                <div className="sideBarCartHeader">
                  <div
                    className="sideBarCloseIcon"
                    onClick={() => {
                      setSideBarIsActive("inActive");
                    }}
                  >
                    <IoIosCloseCircleOutline size="1.5em" />
                  </div>
                  <div className="sideBarCartTitleItems">
                    <div className="sideBarCartItems">0&nbsp;عناصر</div>
                    <div className="sideBarCartTitle">سلة مشترياتي</div>
                  </div>
                </div>
                <div className="sideBarContent">سلة مشترياتكم فارغة</div>
                <div className="sideBarFooter">
                  <div className="sideBarFooterTotalTitleTotalPrice">
                    <div className="sideBarFooterTotalPrice">0 د.م</div>
                    <div className="sideBarFooterTitle">مجموع سلة التسوق</div>
                  </div>
                  <div className="sideBarFooterButtons">
                    <button className="sideBarFooterBuyNowButton">
                      شراء الان
                    </button>
                    <button className="sideBarFooterKeepShoppingButton">
                      شراء الان
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (sideBarIsActive === "inActive") {
          return (
            <div className="sideBarParentOff">
              <div className="sideBarContainerOff">
                <div className="sideBarCartHeader">
                  <div className="sideBarCloseIcon">
                    <IoIosCloseCircleOutline size="1.5em" />
                  </div>
                  <div className="sideBarCartTitleItems">
                    <div className="sideBarCartItems">0&nbsp;عناصر</div>
                    <div className="sideBarCartTitle">سلة مشترياتي</div>
                  </div>
                </div>
                <div className="sideBarContent">سلة مشترياتكم فارغة</div>
                <div className="sideBarFooter">
                  <div className="sideBarFooterTotalTitleTotalPrice">
                    <div className="sideBarFooterTotalPrice">0 د.م</div>
                    <div className="sideBarFooterTitle">مجموع سلة التسوق</div>
                  </div>
                  <div className="sideBarFooterButtons">
                    <button className="sideBarFooterBuyNowButton">
                      شراء الان
                    </button>
                    <button className="sideBarFooterKeepShoppingButton">
                      شراء الان
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })()}
    </>
  );
};
