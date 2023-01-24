import AuthForm from "@/components/authForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { inputOptions } from "./contant";
import Helmet from "@/components/helmet";
import { signIn } from "../services";
import { useMutation } from "react-query";
import { credentialDTO } from "../enums";

export default function Login() {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading, reset } = useMutation(signIn, {
    onSuccess: (data) => console.log({ data }),
  });

  const onLogin = (data: credentialDTO) => {
    mutate(data);
  };

  return (
    <Helmet title="login">
      <AuthForm
        title="Hi, Welcome"
        intro="Please sign-up to start your experience"
        route="/register"
        btmText="Don’t have an account?"
        routeText="Register"
        btnText="LOGIN"
        inputOptions={inputOptions}
        isLoading={isSubmitting || isLoading}
        handleSubmit={handleSubmit(onLogin)}
        control={control}
        errors={errors}
      />
    </Helmet>
  );
}
