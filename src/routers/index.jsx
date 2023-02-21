import React, { lazy, Suspense, useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Loading from "../components/Loading";

import { useAuthContext } from "../contexts/AuthContext";

const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const ForgotPass = lazy(() => import("../pages/ForgotPass/index"));
const Tabs = lazy(() => import("../pages/Tabs/index"));
const CustomizeReport = lazy(() => import("../pages/CustomizeReport/index"));
const SebiReport = lazy(() => import("../pages/SebiReport"));
const GriReport = lazy(() => import("../pages/GriReport"));
const Report = lazy(() => import("../pages/Report"));
const Social = lazy(() => import("../pages/Social"));
const MyReport = lazy(() => import("../pages/MyReport"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Environment = lazy(() => import("../pages/Environment"));
const Governance = lazy(() => import("../pages/Governance"));
const ProfileDetails = lazy(() => import("../pages/ProfileDetails"));
const CompanyDetails = lazy(() => import("../pages/CompanyDetails"));
const Verification = lazy(() => import("../pages/Verification"));
const Verified = lazy(() => import("../pages/Verified/index"));

const CreateReport = lazy(() => import("../pages/CreateReport"));

const Routers = () => {
  const { isAuthorized, setisAuthorized } = useAuthContext();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setisAuthorized(true);
    }
  }, [setisAuthorized]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={isAuthorized ? <Dashboard /> : <Login />} />
        <Route
          path="/login"
          element={isAuthorized ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthorized ? <Navigate to="/dashboard" /> : <SignUp />}
        />
        <Route
          path="/forgotpassword"
          element={
            isAuthorized === false ? <ForgotPass /> : <Navigate to="/Login" />
          }
        />

        <Route
          path="/verified"
          element={
            isAuthorized === false ? <Verified /> : <Navigate to="/Login" />
          }
        />

        <Route
          path="/verification"
          element={
            isAuthorized === false ? <Verification /> : <Navigate to="/Login" />
          }
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
        <Route
          path="/myReport"
          element={isAuthorized ? <MyReport /> : <Navigate to="/Login" />}
        />
        <Route
          path="/profileDetails"
          element={isAuthorized ? <ProfileDetails /> : <Navigate to="/Login" />}
        />
        <Route
          path="/createReport"
          element={isAuthorized ? <CreateReport /> : <Navigate to="/Login" />}
        />
      </Routes>
    </Suspense>
  );
};

export default Routers;
