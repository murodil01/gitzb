import React from "react";
import map from "./assets/images/map.png";

function Map() {
  return (
    <div>
      <div className="bg-[rgba(0, 0, 0, 1)]">
        <h3 className="font-medium text-[36px] leading-[42.19px] text-[#4E9F0D] text-center py-[44px]">Наши филиалы</h3>
      </div>
      <img src={map} alt="" />
    </div>
  );
}
export default Map;