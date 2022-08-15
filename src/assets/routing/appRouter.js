import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "../../screen/about";
import Home from "../../screen/home"

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    );
}

export default AppRouter;