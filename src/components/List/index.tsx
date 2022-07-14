import { useSelector } from "react-redux";
import { Todo } from "../../App";
import { IRootState } from "../../redux/store";
import Item from "../Item";
import "./index.css";

const List = () => {
  const todos = useSelector<IRootState, Todo[]>(({ todos }) => todos);

  return (
    <ul className="todo-main">
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default List;
