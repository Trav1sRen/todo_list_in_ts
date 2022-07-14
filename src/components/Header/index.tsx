import { nanoid } from "nanoid";
import { KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addTodoAction, AddTodoAction } from "../../redux/action";
import "./index.css";

const Header = () => {
  const dispatch = useDispatch<Dispatch<AddTodoAction>>();

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // This assignment is necessary!!!
      const val = event.currentTarget.value;

      if (val.trim() === "") {
        alert("Cannot input empty value!");
        return;
      }

      dispatch(
        addTodoAction({
          id: nanoid(),
          name: val,
          done: false,
        })
      );

      event.currentTarget.value = "";
    }
  };

  return (
    <div className="todo-header">
      <input
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="Input the Todo item, Click 'Enter'"
      />
    </div>
  );
};

export default Header;
