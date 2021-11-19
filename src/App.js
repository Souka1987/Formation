/* ******** Pour la navigation ******** */
import { HashRouter as Router, Route, Routes } from "react-router-dom";
/* ************** */

import React from "react";

// Import des components et pages pour l'affichage
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
//import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";

/*
*********
*/

function App() {
  /* Indiquer les droits de l'utilisateur (admin ou pas) */
  const user = false; 
  /* ****************** */
  return (
    <Router>
   <TopBar />
   <Routes>
     <Route exact path="/" element={<Home />}/>

      {/* Seul l'utilisateur connecté peut accéder à ces pages */}
     <Route path="/register" element={user ? <Home/> : <Register />} />

     <Route path="/login" element={user ? <Home/> : <Login />} />
      {/* Pour créer un article s'enregister */}
     <Route path="/write">
     {/* {user ? <Write/> : <Register />} */}
     </Route>

     <Route path="/settings" element={user ? <Settings/> : <Register />} />
      {/* ************************************************ */}

     {/* Article ID */}
     {/* <Route path="/post/:postId">
     <Single />
     </Route> */}
   </Routes>
   </Router>
  );
}

export default App;
