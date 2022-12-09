import styled from "styled-components";
import { MediaDiv } from "../common/CommonStyled";
import { SubmitBtn } from "./UserStyled";
import backGroundImage from "../../images/Background.jpg";

export const EditProfileWrap = styled.div`
  background-image: url(${backGroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 65px;
`;

export const EditProfileBox = styled(MediaDiv)`
  background-color: #f7f7f7;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding-top: 3rem;
  overflow: hidden;
`;

export const EditProfileHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
`;

export const EditProfileForm = styled.form`
  margin-top: 50px;
  background: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-radius: 0.325rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const EditProfileInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const EditProfileInput = styled.input<{isError: boolean}>`
  outline: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.325rem;
  margin-top: 0.5rem;
  background: ${(props) => (props.isError ? "#FFB3B3" : "#f7f7f7")};
  font-size: 0.95rem;
  transition: 0.1s;

  :focus {
    outline: 0.2rem solid ${(props) => (props.isError ? "#FFB3B3" : "#AAE89F")};
  }
`;
export const EditProfileLabel = styled.label`
  font-size: 0.9rem;
`;

export const EditProfileSubmit = styled(SubmitBtn)`
  margin-top: 6rem;
  font-weight: 600;
`;
