import React, { useEffect } from "react";

import { useAdminContext } from "./contexts/AdminContext";
import Routers from "./routers";

const App = () => {
  const { setDetails, setReports } = useAdminContext();

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("savedDetails"));

    if (savedDetails) {
      setDetails(savedDetails);
    }

    const savedReports = JSON.parse(localStorage.getItem("savedReports"));

    if (savedReports) {
      setReports(savedReports);
    }
  }, [setDetails, setReports]);

  return <div>
    <Routers />
  </div>;
};

export default App;
