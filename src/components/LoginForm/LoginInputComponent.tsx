import { UseFormRegisterReturn } from 'react-hook-form';
import { LoginInputBox, LoginInput, LoginSpan, LoginI } from '../../styles/Login/LoginStyled';


interface IProps {
  register: UseFormRegisterReturn;
  isError: boolean;
  type: string;
  name: string;
}

export const LoginInputComponent = ({ register, isError, type, name}:IProps) => {

  return (
    <LoginInputBox>
      <LoginInput
        {...register}
        type={type}
        required
        isError={isError}
      />
      <LoginSpan isError={isError}>{name}</LoginSpan>
      <LoginI isError={isError} />
    </LoginInputBox>
  )
}