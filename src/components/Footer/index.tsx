import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Todo } from "../../App";
import {
  DeleteDoneTodosAction,
  deleteDoneTodosAction,
  updateAllTodoStatusAction,
  UpdateAllTodoStatusAction,
} from "../../redux/action";
import { IRootState } from "../../redux/store";
import "./index.css";

const Footer = () => {
  const todos = useSelector<IRootState, Todo[]>(({ todos }) => todos);

  const dispatch =
    useDispatch<Dispatch<DeleteDoneTodosAction | UpdateAllTodoStatusAction>>();

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(updateAllTodoStatusAction(event.target.checked));

  const handleClick = () => {
    dispatch(deleteDoneTodosAction());
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
