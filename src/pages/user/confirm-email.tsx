import { gql, useApolloClient, useMutation } from "@apollo/client"
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyEmail, verifyEmailVariables } from '../../__generated__/verifyEmail';
import { useEffect } from 'react';
import { useMe } from '../../hooks/useMe';
import { ConfirmDescription, ConfirmName, ConfirmWrap } from "../../styles/User/ConfirmStyled";
import { Helmet } from "react-helmet-async";

const VERIFY_EMAIL_MUTATION = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ok
      error
    }
  }
`

export const ConfirmEmail = () => {
  const { data: userData } = useMe();
  const client = useApolloClient();
  const navigate = useNavigate();

  const onCompleted = (data: verifyEmail) => {
    const {
      verifyEmail: { ok },
    } = data;

    if (ok && userData?.me.id) {
      client.writeFragment({
        id: `User:${userData.me.id}`,
        fragment: gql`
          fragment VerifiedUser on User {
            verified
          }
        `,
        data: {
          verified: true,
        }
      });
      navigate('/');
    }
  }

  const [verifyEmail] = useMutation<
    verifyEmail,
    verifyEmailVariables
    >(VERIFY_EMAIL_MUTATION, {
    onCompleted
  });

  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code');
  useEffect(() => {
    verifyEmail({
      variables: {
        input: {
          code: code!,
        },
      },
    });
  }, []);

  return (
    <ConfirmWrap>
      <Helmet>
        <title>Buydell | Confirm</title>
      </Helmet>
      <ConfirmName>Confirm email...</ConfirmName>
      <ConfirmDescription>페이지를 닫지 말고 기다려 주세요.</ConfirmDescription>
    </ConfirmWrap>
  )
}