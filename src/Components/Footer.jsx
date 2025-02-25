import React from "react";

function Footer() {
  return (
    <div className="pt-[47px] bg-black text-white px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <a
          className="w-[160px] h-[30px] flex items-center justify-center rounded-[3px] text-white bg-[#4E9F0D]"
          href="#"
        >
          Street88
        </a>

        <a
          className="text-[#4E9F0D] font-bold text-[20px] md:text-[24px] leading-[28.18px] mt-4 md:mt-0"
          href="tel:+998909807723"
        >
          +998 90 980 77 23
        </a>
      </div>

      <nav className="pb-[34px] mt-6">
        <ul className="flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-x-[40px]">
          {[
            "Меню",
            "O нас",
            "Контакты",
            "Instagram",
            "Facebook",
            "Telegram Bot",
          ].map((item, index) => (
            <li key={index}>
              <a
                className="text-white font-medium text-[18px] leading-[21.13px] hover:text-[#4E9F0D] transition-colors duration-300"
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-white font-thin text-[16px] leading-[18.78px] text-center pb-[47px]">
        Сайт разработан в целях обучения © PROWEB 2019
      </p>
    </div>
  );
}

export default Footer;
