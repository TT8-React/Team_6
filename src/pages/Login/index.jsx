import React, { useEffect, useState } from "react";
import FormCard from "../../components/FormCard";

import Button from "../../components/Button";
import FormQuestion from "../../components/FormQuestion";
import FormTitle from "../../components/FormTitle";
import InputCard from "../../components/InputCard";
import NavButton from "../../components/NavButton";

import { DivButton, DivQuestion, StyledLink } from "./style";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as yup from "yup";
import axios from "axios";
import { ErrorMessage, ErrorsList } from "../SignUp";

const Login = () => {
  const [Email, SetEmail] = useState("");
  const [Password, Setpassword] = useState("");

  const {
    isLoading,
    setIsLoading,
    setisAuthorized,
    setErrors,
    Errors,
    setToken,
    setusername,
  } = useAuthContext();

  const schema = yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().min(8).required(),
  });

  useEffect(() => {
    return () => setErrors([]);
  }, [setErrors]); 


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    schema
      .validate(
        {
          Email,
          Password,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `https://react-tt-api.onrender.com/api/users/login`,
          {
            email: Email,
            password: Password,
          }
        );
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setusername(res.data.name);
          localStorage.setItem("name", res.data.name);
          setErrors([]);
          setIsLoading(false);
          setisAuthorized(true);
        }
      })
      .catch((e) => {
        setErrors(e.errors || [e.message]);
        setIsLoading(false);
      });
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    id === "Email" ? SetEmail(value) : Setpassword(value);
  };
  return (
    <div>
      <FormCard>
        <FormTitle title="LOG IN" />
        {Errors && (
          <ErrorsList>
            {Errors.map((error, index) => {
              return <ErrorMessage key={index}>{error}</ErrorMessage>;
            })}
          </ErrorsList>
        )}
        <form onSubmit={handleSubmit}>
          <InputCard
            id="Email"
            label="Email ID"
            disc="Enter Email ID"
            typeInput="email"
            value={Email}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            id="Password"
            label="Password"
            disc="Enter password"
            typeInput="Password"
            value={Password}
            onChangeFunction={handleChangeInput}
          />
          <StyledLink to="/forgotpassword">
            <FormQuestion Ques="Forgotpassword ?" />
          </StyledLink>
          <DivButton>
            <Button name={isLoading ? "Loading ... " : "LOG IN"} />
          </DivButton>
          <DivQuestion>
            <FormQuestion Ques="Don’t have an account ?" />
            <NavLink to="/signup">
              <NavButton name="Sign up" type="navigate" />
            </NavLink>
          </DivQuestion>
        </form>
      </FormCard>
    </div>
  );
};

export default Login;
