import React from "react";
import { Routes, Route } from "react-router-dom";

import { } from "@chakra-ui/react";

import Home from './pages/HomePage/Home';
import Sandbox from "./pages/SandboxPages/Sandbox";
import UXWorks from "./pages/ProjectsPage/UXWorks";
import Layout from "./components/Layouts/Layout";


function App() {
  return (

    <div className="mainContainer">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="/ux" element={<UXWorks />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
