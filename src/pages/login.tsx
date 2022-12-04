import { gql } from "@apollo/client";
import { LoginFormComponents } from "../components/LoginForm/LoginFormComponent";
import { LoginBox, LoginWrap } from "../styles/Login/LoginStyled";

export const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password:String!) {
    login(input: {
      email: $email,
      password: $password,
    }) {
      ok
      error
      accessToken
      refreshToken
    }
  }
`

export const Login = () => {

  return (
    <LoginWrap>
      <LoginBox>
        <LoginFormComponents />
      </LoginBox>
    </LoginWrap>
  );
};
