import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../../screen/home";
import Enterprise from "../../screen/ea";
import Admin from "../../screen/admin";
import Portal from "../../screen/portal";
import Impex from "../../screen/impex";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/Impex" element={<Impex />} />
    </Routes>
  );
}

export default AppRouter;