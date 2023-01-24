import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthForm from "@/components/authForm";
import { schema } from "./validation";
import { inputOptions } from "./contant";
import { useNavigate } from "react-router-dom";
import Helmet from "@/components/helmet";
import { SignUpCredentialDTO } from "../enums";
import { useMutation } from "react-query";
import { register } from "../services";

export default function SignUp() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading, reset } = useMutation(register, {
    onSuccess: (data) => console.log({ data }),
  });

  const onRegiseter = (data: SignUpCredentialDTO) => {
    mutate(data);
  };

  return (
    <Helmet title="Welcome">
      <AuthForm
        title="Hi, Welcome"
        intro="Please sign-in to your account and start your experience"
        route="/login"
        btmText="Already have an account?"
        routeText="Login"
        btnText="REGISTER"
        inputOptions={inputOptions}
        handleSubmit={handleSubmit(onRegiseter)}
        control={control}
        errors={errors}
        isLoading={isSubmitting || isLoading}
      />
    </Helmet>
  );
}
