import { gql, useApolloClient, useMutation } from "@apollo/client"
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { verifyEmail, verifyEmailVariables } from '../../__generated__/verifyEmail';
import { useEffect } from 'react';
import { useMe } from '../../hooks/useMe';

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
      <ConfirmName>Confirm email...</ConfirmName>
      <ConfirmDescription>페이지를 닫지 말고 기다려 주세요.</ConfirmDescription>
    </ConfirmWrap>
  )
}

export const ConfirmWrap = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ConfirmName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
`

export const ConfirmDescription = styled.span`
  font-size: 1rem;
`