import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<About />} />
        <Route path="/news" exact element={<News />} />
        <Route element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
