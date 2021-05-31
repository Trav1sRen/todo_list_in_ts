import {TodoContext, TodoType} from "../../App";
import {ChangeEvent, useContext, useState} from "react";
import "./index.css";

const Item = ({id, name, done}: TodoType) => {
    const {setTodo} = useContext(TodoContext);
    const [mouseState, setMouseState] = useState<boolean>();

    const handleMouse = (flag: boolean) =>
        () => setMouseState(() => flag);

    const handleCheck = (id: string) =>
        (event: ChangeEvent<HTMLInputElement>) => {
            setTodo(todos => {
                todos[todos.findIndex(todo =>
                    todo.id === id)].done = event.target.checked; // Interface ChangeEvent has "target" property
                return todos;
            });
        }

    const handleClick = (id: string) =>
        () => {
            setTodo(todos => {
                const idx = todos.findIndex(todo => todo.id === id);
                return [...todos.slice(0, idx), ...todos.slice(idx + 1)];
            });
        }

    return (
        <li style={{backgroundColor: mouseState ? '#ddd' : 'white'}} onMouseLeave={handleMouse(false)}
            onMouseEnter={handleMouse(true)}>
            <label>
                <input onChange={handleCheck(id)} type="checkbox" defaultChecked={done}/>
                <span>{name}</span>
            </label>
            <button onClick={handleClick(id)} className="btn btn-danger"
                    style={{display: mouseState ? 'block' : 'none'}}>Delete
            </button>
        </li>
    );
}

export default Item;