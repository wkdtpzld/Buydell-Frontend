import { SubmitBtn } from '../../styles/User/UserStyled';

interface IProps {
  loading: boolean
  canClick: boolean
  actionText: string;
}

export const SubmitBtnComponent = ({loading, canClick, actionText}:IProps) => {
  
  return (
    <SubmitBtn canClick={canClick}>
      {loading ? "로딩 중" : actionText}
    </SubmitBtn>
  );
}