/*import React, { useState } from "react";
import bg_iimg from "./assets/images/bg_iimg.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between gap-x-4 sm:gap-x-[50px] md:gap-x-[300px] lg:gap-x-[550px] items-center py-4 px-6 bg-transparent relative">
      <a
        className="w-[160px] h-[30px] px-[30px] py-[8px] rounded-[3px] text-white bg-[rgba(78,159,13,1)] flex items-center justify-center"
        href="#"
      >
        Street88
      </a>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FiX size={30} className="text-white" />
        ) : (
          <FiMenu size={30} className="text-white" />
        )}
      </div>
      <ul
        className={`md:flex gap-6 absolute md:static top-[60px] left-0 w-full bg-black md:bg-transparent flex-col md:flex-row items-center transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {["Корзина", "Меню", "O нас", "Контакты"].map((item, index) => (
          <li key={index} className="w-full text-center md:w-auto">
            <a
              className="block md:inline font-medium text-[18px] leading-[21.13px] px-4 py-2 rounded-md text-[rgba(78,159,13,1)] hover:text-white hover:bg-[rgba(78,159,13,1)] transition-all duration-300"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HeaderHero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white px-6"
      style={{ backgroundImage: `url(${bg_iimg})` }}
    >
      <Header />
      <div className="flex flex-col pt-[80px] text-left">
        <h1 className="text-[rgba(78,159,13,1)] py-[20px] 
        font-black text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.2]">
          Большой гамбургер
        </h1>
        <span className="font-normal text-[24px] sm:text-[28px] 
        md:text-[32px] lg:text-[36px] leading-[1.2] text-[#4E9F0D]">
          говядина
        </span>
        <p className="max-w-[1169px] w-full text-white font-normal text-[18px] leading-[21.13px] pt-[30px] pb-[52px]">
          Свежая хрустящая булочка, листики салата, маринованный огурец c луком
          и небольшая котлета, сдобренная майонезом и кетчупом, - таков
          классический портрет гамбургера.
        </p>
        <button className="max-w-[350px] w-full h-[100px] bg-[#4E9F0D] mb-[135px]">
          <a
            className="font-thin text-[60px] leading-[70.44px] text-white"
            href="#"
          >
            14 500
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeaderHero;*/

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import bg_iimg from "./assets/images/bg_iimg.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between gap-x-4 sm:gap-x-[50px] md:gap-x-[300px] lg:gap-x-[550px] items-center py-4 px-6 bg-transparent relative">
      <NavLink className="w-[160px] h-[30px] px-[30px] py-[8px] rounded-[3px] text-white bg-[rgba(78,159,13,1)] flex items-center justify-center" to="/">
        Street88
      </NavLink>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={30} className="text-white" /> : <FiMenu size={30} className="text-white" />}
      </div>
      <ul className={`md:flex gap-6 absolute md:static top-[60px] left-0 w-full bg-black md:bg-transparent flex-col md:flex-row items-center ${isOpen ? "flex" : "hidden"}`}>
        {["Todos", "Comments", "Posts"].map((item) => (
          <li key={item} className="block md:inline font-medium text-[18px] leading-[21.13px] px-4 py-2 rounded-md  transition-all duration-300">
            <NavLink className="block md:inline px-4 py-2 text-[rgba(78,159,13,1)] hover:text-white hover:bg-[rgba(78,159,13,1)] rounded-md" to={`/${item.toLowerCase()}`}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Page = ({ title, endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => setData(response.data.slice(0, 10)))
      .catch((error) => console.error(error));
  }, [endpoint]);

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="list-disc pl-5">
        {data.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const HeaderHero = () => {
  return (
    <div className="bg-cover bg-center text-white px-6 min-h-screen" style={{ backgroundImage: `url(${bg_iimg})` }}>
      <Header />
      <div className="pt-[80px] text-left">
      <h1 className="text-[rgba(78,159,13,1)] py-[20px] 
        font-black text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.2]">
          Большой гамбургер
        </h1>
        <span className="font-normal text-[24px] sm:text-[28px] 
        md:text-[32px] lg:text-[36px] leading-[1.2] text-[#4E9F0D]">
          говядина
        </span>
        <p className="max-w-[1169px] w-full text-white font-normal text-[18px] leading-[21.13px] pt-[30px] pb-[52px]">
          Свежая хрустящая булочка, листики салата, маринованный огурец c луком
          и небольшая котлета, сдобренная майонезом и кетчупом, - таков
          классический портрет гамбургера.
        </p>
        <button className="max-w-[350px] w-full h-[100px] bg-[#4E9F0D] mb-[135px]">
          <a
            className="font-thin text-[60px] leading-[70.44px] text-white"
            href="#"
          >
            14 500
          </a>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <HeaderHero />
      <Routes>
        <Route path="/todos" element={<Page title="Todos" endpoint="todos" />} />
        <Route path="/comments" element={<Page title="Comments" endpoint="comments" />} />
        <Route path="/posts" element={<Page title="Posts" endpoint="posts" />} />
      </Routes>
    </Router>
  );
};

export default App;
