/*import React from "react";
import gambur from "./assets/images/gambur.png"; 

const Cards = () => {
  return (
    <div className="py-[47px]">
      <nav className="pb-[74px]">
        <ul className="flex flex-wrap gap-x-[44px]">
          <li><a className="text-[#7A7A7A] font-semibold text-[20px] leading-[23.48px] hover:text-[#4E9F0D] transition-colors duration-300" href="#">Гамбургеры</a></li>
          <li><a className="text-[#7A7A7A] font-semibold text-[20px] leading-[23.48px] hover:text-[#4E9F0D] transition-colors duration-300" href="#">Хот доги</a></li>
          <li><a className="text-[#7A7A7A] font-semibold text-[20px] leading-[23.48px] hover:text-[#4E9F0D] transition-colors duration-300" href="#">Пицца</a></li>
          <li><a className="text-[#7A7A7A] font-semibold text-[20px] leading-[23.48px] hover:text-[#4E9F0D] transition-colors duration-300" href="#">Напитки</a></li>
          <li><a className="text-[#7A7A7A] font-semibold text-[20px] leading-[23.48px] hover:text-[#4E9F0D] transition-colors duration-300" href="#">Соки</a></li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[60px] gap-y-[39px]">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex-col max-w-[350px] w-full relative">
            <img className="max-w-[350px] w-full max-h-[350px] h-full" src={gambur} alt="Gamburger" />
            
            <span className="absolute top-[290px] left-0 bg-[#4E9F0D] text-white font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28.18px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[58px] py-[8px] sm:py-[10px] md:py-[12px] lg:py-[17px]">
              14 500
            </span>
            <div className="text-left">
              <h3 className="font-bold text-[24px] leading-[28.18px] text-[#4E9F0D] pt-[36px]">
                C ГОВЯДИНОЙ
              </h3>
              <p className="font-normal text-[16px] leading-[23px] text-white pt-[7px]">
                Свежая хрустящая булочка, листики салата, маринованный огурец c луком и небольшая котлета, сдобренная майонезом и кетчупом
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;*/

import React, { useEffect, useState } from "react";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 20)))
      .catch((error) => console.error("API xatosi:", error));
  }, []);

  return (
    <div className="container max-w-[1200px] mx-auto py-[47px] px-4">
      <nav className="pb-[74px] text-left">
        <ul className="flex flex-wrap gap-x-[44px]">
          {["Гамбургеры", "Хот доги", "Пицца", "Напитки", "Соки"].map(
            (category, index) => (
              <li key={index}>
                <a
                  className="text-[#7A7A7A] font-semibold text-[20px] leading-[23.48px] hover:text-[#4E9F0D] transition-colors duration-300"
                  href="#"
                >
                  {category}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-[60px] gap-y-[39px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col max-w-[350px] w-full relative"
          >
            <img
              className="max-w-[350px] w-full max-h-[350px] h-full object-contain"
              src={product.image}
              alt={product.title}
            />

            <span className="absolute top-[290px] left-0 bg-[#4E9F0D] text-white font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28.18px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[58px] py-[8px] sm:py-[10px] md:py-[12px] lg:py-[17px]">
              ${product.price}
            </span>

            <div className="text-left">
              <h3 className="font-bold text-[20px] leading-[28.18px] text-[#4E9F0D] pt-[36px]">
                {product.title.length > 25
                  ? product.title.slice(0, 25) + "..."
                  : product.title}
              </h3>

              <p className="font-normal text-[16px] leading-[23px] text-white pt-[7px]">
                {product.description.length > 100
                  ? product.description.slice(0, 100) + "..."
                  : product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
