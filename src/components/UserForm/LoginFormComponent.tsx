import {
  ForgotPassword,
  Signup,
  UserLinks,
  UserVar,
} from "../../styles/User/UserStyled";
import React from "react";
import { useForm } from "react-hook-form";
import { Logo, UserForm } from '../../styles/User/UserStyled';
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../pages/login";
import {
  loginMutation,
  loginMutationVariables,
} from "../../__generated__/loginMutation";
import logo from "../../images/Logo.jpg";
import { SubmitBtnComponent } from "../common/SubmitBtn";
import { Link } from "react-router-dom";
import { ErrorMesage } from '../../styles/common/CommonStyled';
import { UserInputComponent } from "./UserInputComponent";
import { isLoggedInVar } from '../../apollo';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginFormComponents: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>();

  const onCompleted = (data: loginMutation) => {
    const {
      login: { error, ok, accessToken, refreshToken },
    } = data;

    if (ok) {
      isLoggedInVar(true);
    }
  };

  const [loginMutation, { data: loginMutationResult, loading }] = useMutation<loginMutation, loginMutationVariables>(
    LOGIN_MUTATION,
    {
      onCompleted,
    }
  );

  const onValid = ({ email, password }: ILoginForm) => {
    console.log(email, password);
    loginMutation({
      variables: {
        loginInput: {
          email,
          password
        }
      }
    });
  };

  return (
    <>
      <Logo src={logo} alt="Logo"/>
      <UserVar>로그인</UserVar>
      <UserForm onSubmit={handleSubmit(onValid)}>
        <UserInputComponent
          register={register("email", {
            required: {
              value: true,
              message: "이메일을 입력해 주세요.",
            },
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "이메일이 정확한지 확인해주세요.",
            },
          })}
          isError={Boolean(errors.email)}
          type="text"
          name="Email"
        />
        {errors.email && (
          <ErrorMesage className="mb-5">{errors.email.message}</ErrorMesage>
        )}
        <UserInputComponent
          register={register("password", {
            required: {
              value: true,
              message: "비밀번호를 입력해 주세요.",
            },
          })}
          isError={Boolean(errors.password)}
          type="password"
          name="Password"
        />
        {errors.password && (
          <ErrorMesage className="mb-5">{errors.password.message}</ErrorMesage>
        )}
        <UserLinks>
          <ForgotPassword>비밀번호 찾기</ForgotPassword>
          <Link to="/create-account" >
            <Signup>
              회원가입
            </Signup>
          </Link>
        </UserLinks>
        <SubmitBtnComponent canClick={isValid} actionText="로그인" loading={loading} />
        {loginMutationResult?.login.error && (
          <ErrorMesage>{loginMutationResult.login.error}</ErrorMesage>
        )}
      </UserForm>
    </>
  );
};
