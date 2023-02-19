import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import FormCard from "../../components/FormCard";
import FormQuestion from "../../components/FormQuestion";
import FormTitle from "../../components/FormTitle";
import InputCard from "../../components/InputCard";
import NavButton from "../../components/NavButton";

import { DivButton, DivQuestion } from "../Login/style";
import * as yup from "yup";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";
import styled from "styled-components";

export const ErrorsList = styled.ul`
  list-style: circle;
  padding: 10px;
  position: absolute;
  top: 35%;
  left: -60%;
`;

export const ErrorMessage = styled.li`
  margin-top: 5px;
  color: red;
`;

const SignUp = () => {
  const {
    isLoading,
    setIsLoading,
    setisAuthorized,
    setErrors,
    Errors,
    setToken,
    setusername,
  } = useAuthContext();

  useEffect(() => {
    return () => setErrors([]);
  }, [setErrors]);

  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().min(8).required(),
  });

  const handleSubmit = (e) => {
    setIsLoading(true);

    e.preventDefault();
    schema
      .validate(
        {
          Name,
          Email,
          Password,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `https://react-tt-api.onrender.com/api/users/signup`,
          {
            name: Name,
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
    id === "Email"
      ? SetEmail(value)
      : id === "Password"
      ? SetPassword(value)
      : SetName(value);
  };

  return (
    <div>
      <FormCard>
        <FormTitle title="SIGN UP" />
        {Errors && (
          <ErrorsList>
            {Errors.map((error, index) => {
              return <ErrorMessage key={index}>{error}</ErrorMessage>;
            })}
          </ErrorsList>
        )}
        <form onSubmit={handleSubmit}>
          <InputCard
            id="Name"
            label="Name"
            disc="Enter Name"
            typeInput="text"
            value={Name}
            onChangeFunction={handleChangeInput}
          />
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
            typeInput="password"
            value={Password}
            onChangeFunction={handleChangeInput}
          />
          <DivButton>
            <Button
              name={isLoading ? "Loading ... " : "Sign Up"}
            />
          </DivButton>
          <DivQuestion>
            <FormQuestion Ques="Already have an account ?" />

            <NavLink to="/login">
              <NavButton name="Login" type="navigate" />
            </NavLink>
          </DivQuestion>
        </form>
      </FormCard>
    </div>
  );
};

export default SignUp;
