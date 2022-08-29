import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../../screen/home";
import Ea from "../../screen/ea";
import Admin from "../../screen/admin";
import Portal from "../../screen/portal";
import Impex from "../../screen/impex";

function AppRouter(props) {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Ea lang={props.lang}/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/Impex" element={<Impex />} />

        </Routes>
    );
}

export default AppRouter;