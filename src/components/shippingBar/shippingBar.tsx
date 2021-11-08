import React, { useEffect, useState } from "react";
import "./shippingBar.css";
import { FaShippingFast } from "react-icons/fa";

interface Props {}

export const ShippingBar: React.FC<Props> = () => {
  return (
    <div className={"shippingBarContainer"}>
      <p className="shippingBarTopText">
        <FaShippingFast size="1.1em" color="#f4b720" /> التوصيل بالمجان الى جميع
        انحاء المغرب
      </p>

      <p className="shippingBarBottomText">الدفع عند الاستلام</p>
    </div>
  );
};
