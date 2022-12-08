import { gql } from "@apollo/client";
import { EditProfileFormComponent } from "../../components/EditProfile/EditProfileForm";
import { useMe } from "../../hooks/useMe";
import {
  EditProfileBox,
  EditProfileHeader,
  EditProfileWrap,
} from "../../styles/User/EditProfileStyled";

export const EDIT_PROFILE_MUTATION = gql`
  mutation editProfile($input: EditProfileInput!) {
    editProfile(input: $input) {
      ok
      error
    }
  }
`;

export const EditProfile = () => {
  const { data: userData, refetch } = useMe();

  return (
    <EditProfileWrap>
      <EditProfileBox>
        <EditProfileHeader>회원 정보 변경</EditProfileHeader>
        <EditProfileFormComponent user={userData!.me} refetch={refetch} />
      </EditProfileBox>
    </EditProfileWrap>
  );
};
