import {
  LoginForm,
  LoginLinks,
  ForgotPassword,
  Signup,
  SubmitBtn,
} from "../../styles/Login/LoginStyled";
import { ErrorMesage } from "../../styles/common/CommonStyled";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginInputComponent } from "./LoginInputComponent";
import { LoginVar } from '../../styles/Login/LoginStyled';
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../pages/login";

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginFormComponents: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const [loginMutation, {loading, error, data}] = useMutation(LOGIN_MUTATION);

  const onValid = ({ email, password }: ILoginForm) => {
    console.log(email, password);
    loginMutation({
      variables: {
        email,
        password,
      }
    })
  };

  return (
    <>
    <LoginVar>로그인</LoginVar>
    <LoginForm onSubmit={handleSubmit(onValid)}>
      <LoginInputComponent
        register={register("email", {
          required: {
            value: true,
            message: "이메일을 입력해 주세요.",
          },
        })}
        isError={Boolean(errors.email)}
        type="email"
        name="Email"
      />
      {errors.email && (
        <ErrorMesage className="mb-5">{errors.email.message}</ErrorMesage>
      )}
      <LoginInputComponent
        register={register("password", {
          required: {
            value: true,
            message: "비밀번호를 입력해 주세요.",
          },
        })}
        isError={Boolean(errors.password)}
        type="password"
        name='Password'
      />
      {errors.password && (
        <ErrorMesage className="mb-5">{errors.password.message}</ErrorMesage>
      )}
      <LoginLinks>
        <ForgotPassword>비밀번호 찾기</ForgotPassword>
        <Signup>회원가입</Signup>
      </LoginLinks>
      <SubmitBtn>제출</SubmitBtn>
    </LoginForm>
    </>
  );
};
