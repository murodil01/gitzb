import { useState } from 'react'
import "./App.css";
import HeaderHero from "./Components/HeaderHero";
import Cards from "./Components/Cards";
import Retspet from "./Components/Retsept";
import Map from './Components/Map';
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <HeaderHero />
      <Cards />
      <Retspet />
      <Map/>
      <Footer />
    </>
  );
}

export default App;
