import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  width: "370px",
  marginLeft: "260px",
  marginTop: "10px",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(105, 50, 50, 0.05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  background: "#EDEDED",
  width: "400px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ position: "absolute", left: "5%", top: "23%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{
              fontWeight: "bold",
              background: "#EDEDED",
            }}
          >
            Section A
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Company Details</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Products/Services</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Operations</Typography>
        </AccordionDetails>

        <AccordionDetails>
          <Typography>Employees</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Holding, Subsidiary and Associate ...</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>CSR File</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Transparency and Disclosures ...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{
              fontWeight: "bold",
              background: "#EDEDED",
            }}
          >
            Section B
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Company Details</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Products/Services</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Operations</Typography>
        </AccordionDetails>

        <AccordionDetails>
          <Typography>Employees</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Holding, Subsidiary and Associate ...</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>CSR File</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Transparency and Disclosures ...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{
              fontWeight: "bold",
              background: "#EDEDED",
            }}
          >
            Section C
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Company Details</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Products/Services</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Operations</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
