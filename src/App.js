import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import ForgotPass from "./pages/ForgotPass/index";
import Verification from "./pages/Verification/index";
import Verified from "./pages/Verified/index";
import Dashboard from "./pages/Dashboard/index";
import Environment from "./pages/Environment/index";
import Governance from "./pages/Governance/index";
import Social from "./pages/Social/index";
import Report from "./pages/Report/index";
import GriReport from "./pages/GriReport/index";
import SebiReport from "./pages/SebiReport/index";
import CustomizeReport from "./pages/CustomizeReport/index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/social" element={<Social />} />
        <Route path="/report" element={<Report />} />
        <Route path="/griReport" element={<GriReport />} />
        <Route path="/sebiReport" element={<SebiReport />} />
        <Route path="/customizeReport" element={<CustomizeReport />} />
      </Routes>
    </div>
  );
};

export default App;
