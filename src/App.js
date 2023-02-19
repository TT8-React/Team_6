import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import ForgotPass from "./pages/ForgotPass/index";
import Verification from "./pages/Verification/index";
import Verified from "./pages/Verified/index";

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
      </Routes>
    </div>
  );
};

export default App;
