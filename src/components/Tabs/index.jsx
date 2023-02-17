import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        border: "1px solid #8F8F8F",
        width: "720px",
        margin: "7% auto",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          label="Manual data tab"
          sx={{
            background: "#ffffff",
            padding: "10px 8px",
            color: "black",
            width: "450px",
            border: "1px solid #8F8F8F",
            "&.Mui-selected": {
              background: "#EBEBF0",
              color: "black",
              fontWeight: "bold",
            },
          }}
        />
        <Tab
          label="Bulk upload tab"
          sx={{
            background: "#ffffff",
            padding: "10px 8px",
            color: "black",
            width: "450px",
            border: "1px solid #8F8F8F",
            "&.Mui-selected": {
              background: "#EBEBF0",
              color: "black",
              fontWeight: "bold",
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
