import { UseFormRegisterReturn } from 'react-hook-form';
import { UserInputBox, UserInput, UserSpan, UserI } from '../../styles/User/UserStyled';


interface IProps {
  register: UseFormRegisterReturn;
  isError: boolean;
  type: string;
  name: string;
}

export const UserInputComponent = ({ register, isError, type, name}:IProps) => {

  return (
    <UserInputBox>
      <UserInput
        {...register}
        type={type}
        required
        isError={isError}
      />
      <UserSpan isError={isError}>{name}</UserSpan>
      <UserI isError={isError} />
    </UserInputBox>
  )
}