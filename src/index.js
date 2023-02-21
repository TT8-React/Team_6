import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/index";
import AuthProvider from "./contexts/AuthContext";
import AdminProvider from "./contexts/AdminContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <AdminProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AdminProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
