import { gql } from "@apollo/client";
import { LoginFormComponents } from "../components/UserForm/LoginFormComponent";
import { UserBox, UserWrap } from '../styles/User/UserStyled';
import { Helmet } from "react-helmet-async";

export const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      error
      accessToken
      refreshToken
    }
  }
`

export const Login = () => {

  return (
    <UserWrap>
      <Helmet>
        <title>BuyDell | Login</title>
      </Helmet>
      <UserBox>
        <LoginFormComponents />
      </UserBox>
    </UserWrap>
  );
};
