import * as React from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hoks/useTypeSelector";
import { fetchUsers } from "../store/action-create/user";
import { useAction } from "../hoks/useAction";

export const UserList: React.FC<{}> = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const { fetchUsers } = useAction();

  React.useEffect(() => {
    fetchUsers()
  }, []);

  if (loading) {
    return <h1>Іде загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  );
};
