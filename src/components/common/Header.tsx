import { Link } from "react-router-dom";
import logo from "../../images/Logo.jpg";
import { useMe } from '../../hooks/useMe';
import styled from 'styled-components';
import {
  HeaderBox,
  HeaderInfo,
  HeaderLogo,
  HedaerWrap,
} from "../../styles/common/CommonStyled";

export const Header = () => {

  const { data } = useMe();

  return (
    <>
      {!data?.me.verified && (
        <VerifyVar>
          <span>계정 인증을 해주세요.</span>
        </VerifyVar>
      )}
      <HedaerWrap>
        <HeaderBox className="justify-between">
          <Link to="/">
            <HeaderLogo src={logo} alt="headerLogo"></HeaderLogo>
          </Link>
          <HeaderInfo>
            <Link to='/edit-profile'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
          </HeaderInfo>
        </HeaderBox>
      </HedaerWrap>
    </>
  );
};

export const VerifyVar = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  background: #e84118;
  color: white;
`