import { ErrorMesage, ErrorMessageBox } from "../../styles/common/CommonStyled";

interface IProps {
  message: string;
}

export const ErrorMessageComponent = ({ message }: IProps) => {
  return (
    <ErrorMessageBox>
      {<ErrorMesage>{message}</ErrorMesage>}
    </ErrorMessageBox>
  );
};
