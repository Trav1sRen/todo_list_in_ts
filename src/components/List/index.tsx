import { useAppSelector } from "../../redux/hooks";
import Item from "../Item";
import "./index.css";

const List = () => {
  const todos = useAppSelector(({ todoReducer: { todos } }) => todos);

  return (
    <ul className="todo-main">
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default List;
