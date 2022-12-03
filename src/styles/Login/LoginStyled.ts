import styled from 'styled-components';

export const LoginWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(31 41 55);
`

export const LoginBox = styled.div`
  background-color: white;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 400px;
  width: 100%;
  border-radius: 0.325rem;
  text-align: center;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`

export const LoginVar = styled.header`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.25rem;
  margin-bottom: 1.125rem;
`

export const LoginInput = styled.input<{ isError: boolean }>`
  position: relative;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.3rem;
  border-radius: 0.325rem;
  width: 100%;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  transition: 1s;
  z-index: 11;
  color: white;

  :focus ~ span , :valid ~ span {
    color: ${props => props.isError ? 'red' : '#0ace0a'};
    transform: translateY(-2rem) translateX(-0.3rem);
    font-size: 0.8rem;
  }
`

export const LoginSpan = styled.span<{ isError: boolean }>`
  position: absolute;
  left: 0;
  padding: 0.5rem 0.5rem 0.5rem;
  font-size: 1rem;
  color: ${props => props.isError ? 'red' : 'gray'};
  pointer-events: none;
  transition: 0.3s;
`;

export const LoginInputBox = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;

  input:focus ~ i , input:valid ~ i {
    height: 40px;
  }
`
export const LoginI = styled.i<{ isError: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: ${props => props.isError ? 'red' : '#0ace0a'};
  transition: 0.4s;
  pointer-events: none;
  border-radius: 0.325rem;
  z-index: 0;
  opacity: ${props => props.isError ? 0.3 : 1}
`

export const LoginLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Link = styled.a`
  margin: 10px 0;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 700;
  padding-left: 0.5rem;
`

export const ForgotPassword = styled(Link)`
  :hover {
    color: #0ace0a;
  }
`

export const Signup = styled(Link)`
  color: #0ace0a;
`

export const SubmitBtn = styled.button`
  width: 100%;
  background: #0ace0a;
  padding: 0.3rem 2rem;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 0.325rem;
  color: #ffffff;

  :hover {
    background: #09a509;
  }
`