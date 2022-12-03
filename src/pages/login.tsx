import { useForm } from "react-hook-form";
import { ErrorMesage } from "../styles/common/CommonStyled";
import {
  ForgotPassword,
  LoginBox,
  LoginForm,
  LoginI,
  LoginInput,
  LoginInputBox,
  LoginLinks,
  LoginSpan,
  LoginVar,
  LoginWrap,
  Signup,
  SubmitBtn,
} from "../styles/Login/LoginStyled";

interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onValid = ({ email, password }: ILoginForm) => {
    console.log(email, password);
  };

  return (
    <LoginWrap>
      <LoginBox>
        <LoginVar>로그인</LoginVar>
        <LoginForm onSubmit={handleSubmit(onValid)}>
          <LoginInputBox>
            <LoginInput
              {...register("email", {
                required: {
                  value: true,
                  message: "이메일을 입력해 주세요.",
                },
              })}
              type="text"
              required
              isError={Boolean(errors.email)}
            />
            <LoginSpan isError={Boolean(errors.email)}>Email</LoginSpan>
            <LoginI isError={Boolean(errors.email)} />
          </LoginInputBox>
          {errors.email ? (
            <ErrorMesage className="mb-5">{errors.email.message}</ErrorMesage>
          ) : null}
          <LoginInputBox>
            <LoginInput
              {...register("password", {
                required: {
                  value: true,
                  message: "비밀번호를 입력해 주세요.",
                },
              })}
              type="password"
              required
              isError={Boolean(errors.password)}
            />
            <LoginSpan isError={Boolean(errors.password)}>
              Password
            </LoginSpan>
            <LoginI isError={Boolean(errors.password)} />
          </LoginInputBox>
          {errors.password ? (
            <ErrorMesage className="mb-5">
              {errors.password.message}
            </ErrorMesage>
          ) : null}
          <LoginLinks>
            <ForgotPassword>비밀번호 찾기</ForgotPassword>
            <Signup>회원가입</Signup>
          </LoginLinks>
          <SubmitBtn>제출</SubmitBtn>
        </LoginForm>
      </LoginBox>
    </LoginWrap>
  );
};
