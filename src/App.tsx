import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "./redux/actions/actions";
import { ShippingBar } from "./components/shippingBar/shippingBar";
import { NavBar } from "./components/navBar/navBar";
import { HomePage } from "./components/homePage/HomePage";
import { SliderItem } from "./components/sliders/SliderItem";
import { CallUsPage } from "./components/callUsPage/CallUsPage";
import { CategoriesPage } from "./components/categoriesPage/CategoriesPage";
import { SideBar } from "./components/sideBar/SideBar";

function App() {
  //sideBar Variable
  const [sideBarIsActive, setSideBarIsActive] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <Router>
      <SideBar
        sideBarIsActive={sideBarIsActive}
        setSideBarIsActive={setSideBarIsActive}
      />
      <ShippingBar />
      <NavBar
        sideBarIsActive={sideBarIsActive}
        setSideBarIsActive={setSideBarIsActive}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callus" element={<CallUsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
