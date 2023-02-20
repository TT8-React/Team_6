import useAdmin from "../hooks/useAdmin.js";

const { createContext, useContext } = require("react");

export const AdminContext = createContext(null);

const AdminProvider = ({ children }) => {
  const General = useAdmin();
  return (
    <AdminContext.Provider value={General}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;

export const useAdminContext = () => {
  return useContext(AdminContext);
};
