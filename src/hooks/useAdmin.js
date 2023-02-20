import { useState } from "react";

const useAdmin = () => {
  const [details, setDetails] = useState({});
  const [reports, setReports] = useState([]);

  const removeItem = (id) => {
    const removedReports = reports.filter((report) => report.id !== id);
    
    setReports(removedReports);
  };
  return {
    details,
    setDetails,
    reports,
    setReports,
    removeItem,
  };
};

export default useAdmin;
