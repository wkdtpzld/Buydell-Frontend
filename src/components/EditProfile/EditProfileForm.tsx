import { useForm } from "react-hook-form";
import { EditProfileForm } from "../../styles/User/EditProfileStyled";
import { SubmitBtnComponent } from "../common/SubmitBtn";
import { emailPattern } from "../../utils/jslib";
import { useMutation, useApolloClient, gql, OperationVariables, ApolloQueryResult } from "@apollo/client";
import { EDIT_PROFILE_MUTATION } from "../../pages/user/edit-profile";
import {
  editProfile,
  editProfileVariables,
} from "../../__generated__/editProfile";
import { meQuery_me, meQuery } from '../../__generated__/meQuery';
import { useNavigate } from "react-router-dom";
import { EditProfileInputComponent } from "./EditProfileInput";

interface IFormProps {
  email?: string;
  password?: string;
}

interface IProps {
  user: meQuery_me;
  refetch: () => Promise<ApolloQueryResult<meQuery>>;
}

export const EditProfileFormComponent = ({ user, refetch }: IProps) => {
  const client = useApolloClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IFormProps>({
    defaultValues: {
      email: user.email,
    },
    mode: "onChange",
  });

  const onCompleted = async (data: editProfile) => {
    const {
      editProfile: { ok, error },
    } = data;

    if (ok && !error) {
      const newEmail = getValues("email");
      if (user.email !== newEmail) {
        client.writeFragment({
          id: `User:${user.id}`,
          fragment: gql`
            fragment EditUser on User {
              verified
              email
            }
          `,
          data: {
            verified: false,
            email: newEmail,
          },
        });
        // await refetch();
        navigate("/");
      }
    }
  };

  const [editProfile, { loading }] = useMutation<
    editProfile,
    editProfileVariables
  >(EDIT_PROFILE_MUTATION, {
    onCompleted,
  });

  const onSubmit = ({ email, password }: IFormProps) => {
    editProfile({
      variables: {
        input: {
          email,
          ...(password !== "" && { password }),
        },
      },
    });
  };

  return (
    <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
      <EditProfileInputComponent
        register={register("email", {
          pattern: {
            value: emailPattern,
            message: "이메일이 정확한지 확인해주세요.",
          },
        })}
        type="text"
        errorMessage={errors.email?.message}
        name='Email'
      />
      <EditProfileInputComponent
        register={register("password", {
          pattern: {
            value: /^[A-Za-z0-9]{6,12}$/,
            message: "6~12자리 이내의 영,숫자의 조합으로 만들어주세요.",
          },
        })}
        type="password"
        errorMessage={errors.password?.message}
        name='Password'
      />
      <SubmitBtnComponent
        canClick={isValid && !loading}
        actionText="제출"
        loading={loading}
      ></SubmitBtnComponent>
    </EditProfileForm>
  );
};
