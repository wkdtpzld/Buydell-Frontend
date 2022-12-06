import { gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import { SignUpFormComponents } from '../components/UserForm/SignupFormComponents';
import { UserWrap, UserBox } from '../styles/User/UserStyled';

export const SIGN_UP_MUTATION = gql`
  mutation signUpMutation($createAccountInput: CreateAccountInput!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`;

export const CreateAccount = () => {
  return (
    <UserWrap>
      <Helmet>
        <title>BuyDell | SignUp</title>
      </Helmet>
      <UserBox>
        <SignUpFormComponents />
      </UserBox>
    </UserWrap>
  );
};
