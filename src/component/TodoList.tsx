import * as React from "react";
import { useTypeSelector } from "../hoks/useTypeSelector";
import { useAction } from "../hoks/useAction";

export const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypeSelector(
    (state) => state.todo
  );

  const { fetchTodos } = useAction();

  React.useEffect(() => {
    fetchTodos(page, limit);
  }, []);

  if (loading) {
    return <h1>Іде загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.title}</div>
        </div>
      ))}
    </div>
  );
};
