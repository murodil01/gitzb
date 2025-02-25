import React from "react";
//import bag_img from "./images/bag_img.png"; 

function Retsept() {
  return (
    <div
      className="h-screen bg-cover bg-center min-h-[559px] h-full text-left"
      /*style={{ backgroundImage: `url(${bag_img})` }} */
    >
      <h3 className="text-[#4E9F0D] font-bold text-[36px] leading-[42.26px] py-[42px] pb-[14px] text-center">
        Уникальная рецептура
      </h3>
      <p className="w-[202px] h-[1px] bg-[#4E9F0D] mx-auto"></p>
      <p className="px-[80px] text-white font-normal text-[18px] leading-[23px] pt-[46px]">
        Гамбургер является разновидностью сэндвича, состоящей из жареной рубленой котлеты, что подается внутри разрезанной круглой булки.
      </p>
      <p className="px-[80px] text-white font-normal text-[18px] leading-[23px] pt-[25px] pb-[100px]">
        Будучи наиболее распространенной «быстрой» едой в США, гамбургер имеет далеко не американское происхождение.
      </p>
    </div>
  );
}

export default Retsept;
