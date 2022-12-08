import { EditProfileInput, EditProfileInputBox, EditProfileLabel } from '../../styles/User/EditProfileStyled';
import { ErrorMesage } from '../../styles/common/CommonStyled';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  register: UseFormRegisterReturn;
  type: string;
  errorMessage?: string;
  name: string;
}

export const EditProfileInputComponent = ({ register, type, errorMessage, name }: IProps) => {

  return (
    <EditProfileInputBox>
      <EditProfileLabel htmlFor="email">{name}</EditProfileLabel>
      <EditProfileInput
        {...register}
        type={type}
        id="email"
        autoComplete="off"
        isError={Boolean(errorMessage)}
      />
      {errorMessage && <ErrorMesage>{errorMessage}</ErrorMesage>}
    </EditProfileInputBox>
  );
};