import React from "react";
// Dans le router-dom Switch a été remplacé par Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/meteo" element={<Weather />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
