import React from "react";
import map from "./assets/images/map.png";

function Map() {
  return (
    <div className="bg-[rgba(0, 0, 0, 1)] py-[44px]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h3 className="font-medium text-[36px] leading-[42.19px] text-[#4E9F0D] text-center">
          Наши филиалы
        </h3>
      </div>
      <div className="w-full h-screen mt-[50px]">
        <img className="w-full h-full object-cover" src={map} alt="Map" />
      </div>
    </div>
  );
}

export default Map;
