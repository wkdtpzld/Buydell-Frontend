import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../images/Logo.jpg";
import {
  UserVar,
  Logo,
  UserForm,
  UserLinks,
  Signup,
} from "../../styles/User/UserStyled";
import { UserInputComponent } from "./UserInputComponent";
import { Link, useNavigate } from "react-router-dom";
import { SubmitBtnComponent } from "../common/SubmitBtn";
import { useMutation } from "@apollo/client";
import { SIGN_UP_MUTATION } from "../../pages/create-account";
import { UserRole } from "../../__generated__/globalTypes";
import {
  Options,
  SelectBox,
  ErrorMesage,
} from "../../styles/common/CommonStyled";
import {
  signUpMutationVariables,
  signUpMutation,
} from "../../__generated__/signUpMutation";
import { ErrorMessageComponent } from "../common/ErrorMessage";

interface ISignUpForm {
  email: string;
  password: string;
  role: UserRole;
}

export const SignUpFormComponents: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignUpForm>({
    defaultValues: {
      role: UserRole.Client,
    },
  });
  const navigate = useNavigate();
  const onCompleted = (data: signUpMutation) => {
    const {
      createAccount: { ok, error },
    } = data;

    if (ok) {
      navigate("/login");
    }
  };

  const [signUpMutation, { data: signUpMutationData, loading }] = useMutation<
    signUpMutation,
    signUpMutationVariables
  >(SIGN_UP_MUTATION, {
    onCompleted,
  });

  const onSubmit = ({ email, password, role }: ISignUpForm) => {
    if (loading) return;

    signUpMutation({
      variables: {
        createAccountInput: {
          email,
          password,
          role,
        },
      },
    });
  };

  return (
    <>
      <Logo src={logo} alt="Logo" />
      <UserVar>회원가입</UserVar>
      <UserForm onSubmit={handleSubmit(onSubmit)}>
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
            pattern: {
              value: /^[A-Za-z0-9]{6,12}$/,
              message: "6~12자리 이내의 영,숫자의 조합으로 만들어주세요.",
            },
          })}
          isError={Boolean(errors.password)}
          type="password"
          name="Password"
        />
        {errors.password && (
          <ErrorMesage className="mb-5">{errors.password.message}</ErrorMesage>
        )}
        <SelectBox {...register("role")}>
          {Object.keys(UserRole).map((role, index) => (
            <Options key={index}>{role}</Options>
          ))}
        </SelectBox>
        <UserLinks>
          <span>이미 계정이 있으시다면?</span>
          <Signup>
            <Link to="/login">로그인</Link>
          </Signup>
        </UserLinks>
        <SubmitBtnComponent
          canClick={isValid}
          actionText="회원가입"
          loading={loading}
        />
        {signUpMutationData?.createAccount.error && (
          <ErrorMessageComponent
            message={signUpMutationData?.createAccount.error}
          />
        )}
      </UserForm>
    </>
  );
};
