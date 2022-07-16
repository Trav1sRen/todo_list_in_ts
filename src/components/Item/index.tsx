import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTodo, Todo, updateTodoStatus } from "../../redux/slice";
import "./index.css";

const Item = ({ id, name, done }: Todo) => {
  const dispatch = useAppDispatch();

  const [mouseState, setMouseState] = useState<boolean>();

  const handleMouse = (flag: boolean) => () => setMouseState(flag);

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodoStatus({ id, done: event.target.checked }));
  };

  const handleClick = () => {
    if (window.confirm("Are u sure to delete this Todo?")) {
      dispatch(deleteTodo({ id }));
    }
  };

  return (
    <li
      style={{ backgroundColor: mouseState ? "#ddd" : "white" }}
      onMouseLeave={handleMouse(false)}
      onMouseEnter={handleMouse(true)}
    >
      <label>
        <input onChange={handleCheck} type="checkbox" checked={done} />
        <span style={{ marginLeft: "15px" }}>{name}</span>
      </label>
      <button
        onClick={handleClick}
        className="btn btn-danger"
        style={{ display: mouseState ? "block" : "none" }}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
