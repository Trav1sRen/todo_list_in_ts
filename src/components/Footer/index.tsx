import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteDoneTodos, updateAllTodoStatus } from "../../redux/slice";
import "./index.css";

const Footer = () => {
  const todos = useAppSelector(({ todoReducer: { todos } }) => todos);
  const dispatch = useAppDispatch();

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(updateAllTodoStatus({ done: event.target.checked }));

  const handleClick = () => {
    dispatch(deleteDoneTodos());
  };

  return (
    <div className="todo-footer">
      <label>
        <input
          checked={
            todos.length !== 0 &&
            todos.length === todos.filter((todo) => todo.done).length
          }
          onChange={handleCheck}
          type="checkbox"
        />
      </label>
      <span>
        <span>Done: {todos.filter((todo) => todo.done).length}</span> / All:{" "}
        {todos.length}
      </span>
      <button onClick={handleClick} className="btn btn-danger">
        Clear done items
      </button>
    </div>
  );
};

export default Footer;
