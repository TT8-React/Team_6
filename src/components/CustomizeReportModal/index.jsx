import React, { useState, useEffect, useRef } from "react";
import {
  InputLabel,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledLine,
  StyledModal,
  StyledOverlay,
} from "./style";
import NavButton from "../NavButton";

const CustomizeReportModal = ({ show, handleClose }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const modalRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {show && <StyledOverlay />}

      <StyledModal show={show}>
        <div ref={modalRef}>
          <StyledForm onSubmit={handleSubmit}>
            <h2>Customize report</h2>
            <StyledLine />
            <div>
              <InputLabel>
                <StyledLabel htmlFor="from-date-input">From:</StyledLabel>
                <StyledInput
                  type="date"
                  id="from-date-input"
                  name="from-date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </InputLabel>
              <InputLabel>
                <StyledLabel htmlFor="to-date-input">To:</StyledLabel>
                <StyledInput
                  type="date"
                  id="to-date-input"
                  name="to-date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </InputLabel>
            </div>
            <NavButton name={"Continue for next step"} />
          </StyledForm>
        </div>
      </StyledModal>
    </>
  );
};

export default CustomizeReportModal;
