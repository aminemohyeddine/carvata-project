import React, { useEffect, useState } from "react";
import "./HomePage.css";
import bannerImage from "../../images/HD Banner (9).png";

interface Props {}

export const HomePage: React.FC<Props> = () => {
  //adjust a padding for sticky navBar to prevent hiding content
  const [HomePageClass, setHomePageClass] = useState("HomePageContainer");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > 130;
      if (isTop) {
        setHomePageClass("HomePageContainerSticky");
      } else {
        setHomePageClass("HomePageContainer");
      }
    });
  }, []);
  return (
    <div className={HomePageClass}>
      <div className="bannerContainer">
        <img src={bannerImage} className="bannerImage" alt="banner image" />
      </div>
      <div className="productsDetailsTitle">
        <h1>منتجات حصرية</h1>
        <p>لأول مرة في المغرب</p>
      </div>
    </div>
  );
};
