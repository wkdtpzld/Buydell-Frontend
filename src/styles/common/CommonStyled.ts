import styled from 'styled-components';

export const CommonWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F7F7F7;
`

export const ErrorMessageBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
`

export const ErrorMesage = styled.p`
  padding-left: 0.5rem;
  text-align: left;
  font-size: 0.8rem;
  color: red;
`

export const SelectBox = styled.select`
  height: 40px;
  border-radius: 0.325rem;
  outline: none;
  margin: 1rem 0;
  font-size: 0.9rem;
  padding-left: 0.5rem;
`

export const Options = styled.option`
  outline: none;
`