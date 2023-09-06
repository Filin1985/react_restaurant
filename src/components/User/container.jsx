import { User } from "./component";
import { useGetUsersQuery } from "../../store/services/api";

export const UserContainer = ({ userId }) => {
  const { data: user, isFetching } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data?.find(({ id }) => id === userId),
      };
    },
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
