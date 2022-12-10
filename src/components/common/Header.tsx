import { Link } from "react-router-dom";
import logo from "../../images/Logo.jpg";
import { useMe } from '../../hooks/useMe';
import {
  HeaderBox,
  HeaderInfo,
  HeaderInputBox,
  HeaderLogo,
  HedaerInput,
  HedaerWrap,
  VerifyVar,
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
      <HedaerWrap verified={Boolean(data?.me.verified)}>
        <HeaderBox>
          <Link to="/">
            <HeaderLogo src={logo} alt="headerLogo"></HeaderLogo>
          </Link>
          <HeaderInfo>
            <HeaderInputBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 -mx-8 z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <HedaerInput type="text"/>
            </HeaderInputBox>
            <Link to="/edit-profile">
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