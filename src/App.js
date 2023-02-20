import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

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
import { useAuthContext } from "./contexts/AuthContext";
import CompanyDetails from "./pages/CompanyDetails";
import Tabs from "./pages/Tabs/index";

const App = () => {
  const { isAuthorized, setisAuthorized } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setisAuthorized(true);
    }
  }, [setisAuthorized]);

  return (
    <div>
      <Routes>
        <Route index element={isAuthorized ? <Verified /> : <Login />} />
        <Route
          path="/login"
          element={isAuthorized ? <Navigate to="/verified" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthorized ? <Navigate to="/verified" /> : <SignUp />}
        />
        <Route
          path="/forgotpassword"
          element={isAuthorized ? <ForgotPass /> : <Navigate to="/Login" />}
        />
        <Route
          path="/verification"
          element={isAuthorized ? <Verification /> : <Navigate to="/Login" />}
        />
        <Route
          path="/verified"
          element={isAuthorized ? <Verified /> : <Navigate to="/Login" />}
        />
        <Route
          path="/dashboard"
          element={isAuthorized ? <Dashboard /> : <Navigate to="/Login" />}
        />
        <Route
          path="/environment"
          element={isAuthorized ? <Environment /> : <Navigate to="/Login" />}
        />
        <Route
          path="/governance"
          element={isAuthorized ? <Governance /> : <Navigate to="/Login" />}
        />
        <Route
          path="/social"
          element={isAuthorized ? <Social /> : <Navigate to="/Login" />}
        />
        <Route
          path="/report"
          element={isAuthorized ? <Report /> : <Navigate to="/Login" />}
        />
        <Route
          path="/griReport"
          element={isAuthorized ? <GriReport /> : <Navigate to="/Login" />}
        />
        <Route
          path="/sebiReport"
          element={isAuthorized ? <SebiReport /> : <Navigate to="/Login" />}
        />
        <Route
          path="/customizeReport"
          element={
            isAuthorized ? <CustomizeReport /> : <Navigate to="/Login" />
          }
        />
        <Route
          path="/companyDetails"
          element={isAuthorized ? <CompanyDetails /> : <Navigate to="/Login" />}
        />
        <Route
          path="/tabs"
          element={isAuthorized ? <Tabs /> : <Navigate to="/Login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
