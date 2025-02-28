import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import bg_iimg from "./assets/images/bg_iimg.png";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ language, setLanguage, darkMode, setDarkMode }}>
      <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>{children}</div>
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

const Header = () => {
  const { language, setLanguage, darkMode, setDarkMode } = useAppContext();

  return (
    <nav className="flex justify-between items-center bg-transparent relative">
      <NavLink className="text-white bg-green-700 px-4 py-2 rounded-md text-lg font-bold" to="/">
        Street88
      </NavLink>
      <ul className="flex gap-6">
        {["Todos", "Comments", "Posts"].map((item) => (
          <li key={item}>
            <NavLink className="px-4 py-2 text-green-700 dark:text-green-300 hover:text-white hover:bg-green-700 rounded-md" to={`/${item.toLowerCase()}`}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <button onClick={() => setLanguage(language === "ru" ? "uz" : "ru")} className="text-white border px-3 py-1 rounded-md">
          {language === "ru" ? "UZ" : "RU"}
        </button>
        <button onClick={() => setDarkMode(!darkMode)} className="text-white border px-3 py-1 rounded-md">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

const Page = ({ title, endpoint }) => {
  const { darkMode } = useAppContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => setData(response.data.slice(0, 10)))
      .catch((error) => console.error(error));
  }, [endpoint]);

  return (
    <div className={`p-6 ${darkMode ? "text-white" : "text-black"} ${title === "Todos" ? "text-center" : ""}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="list-disc pl-5 inline-block">
        {data.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const HeaderHero = () => {
  const { language } = useAppContext();
  const content = {
    ru: {
      title: "Большой гамбургер",
      subtitle: "говядина",
      description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера.",
      price: "14 500",
    },
    uz: {
      title: "Katta Gamburger",
      subtitle: "mol go‘shti",
      description: "Yangi tiniq bulochka, salat barglari, tuzlangan bodring va piyoz hamda mayonez va ketchup bilan aralashtirilgan kichik go‘shtli kotlet – mana shunday klassik gamburger.",
      price: "14 500",
    },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white transition-all duration-300"
      style={{
        backgroundImage: `url(${bg_iimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container max-w-[1200px] w-full mx-auto px-6">
        <Header />
        <div className="pt-[80px] text-left">
          <h1 className="text-green-500 py-[20px] font-black text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.2]">
            {content[language].title}
          </h1>
          <span className="font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] text-green-500">
            {content[language].subtitle}
          </span>
          <p className="max-w-[1169px] w-full text-white font-normal text-[18px] leading-[21.13px] pt-[30px] pb-[52px]">
            {content[language].description}
          </p>
          <button className="max-w-[350px] w-full h-[100px] bg-green-500 mb-[135px]">
            <a className="font-thin text-[60px] leading-[70.44px] text-white" href="#">
              {content[language].price}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <HeaderHero />
        <Routes>
          <Route path="/todos" element={<Page title="Todos" endpoint="todos" />} />
          <Route path="/comments" element={<Page title="Comments" endpoint="comments" />} />
          <Route path="/posts" element={<Page title="Posts" endpoint="posts" />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
