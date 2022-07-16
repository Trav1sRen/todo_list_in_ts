import { nanoid } from "nanoid";
import { KeyboardEvent } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/slice";
import "./index.css";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // This assignment is necessary!!!
      const val = event.currentTarget.value;

      if (val.trim() === "") {
        alert("Cannot input empty value!");
        return;
      }

      dispatch(
        addTodo({
          newTodo: {
            id: nanoid(),
            name: val,
            done: false,
          },
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
