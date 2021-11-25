import {ChangeEvent, useState} from "react";
import "./index.css";
import {TodoType} from "../../App";
import {useRecoilState} from "recoil";
import {todoListState} from "../../recoil/atom";


const Item = ({id, name, done}: TodoType) => {
    const [, setTodos] = useRecoilState<TodoType[]>(todoListState);

    const [mouseState, setMouseState] = useState<boolean>();

    const handleMouse = (flag: boolean) =>
        () => setMouseState(flag);

    const handleCheck = ({target: {checked}}: ChangeEvent<HTMLInputElement>) =>
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ?
                    {...todo, done: checked} : todo));

    const handleClick = () =>
        window.confirm('Are u sure to delete this Todo?') &&
        setTodos(todos => todos.filter(todo => todo.id !== id));

    return (
        <li style={{backgroundColor: mouseState ? '#ddd' : 'white'}} onMouseLeave={handleMouse(false)}
            onMouseEnter={handleMouse(true)}>
            <label>
                <input onChange={handleCheck} type="checkbox" checked={done}/>
                <span>{name}</span>
            </label>
            <button onClick={handleClick} className="btn btn-danger"
                    style={{display: mouseState ? 'block' : 'none'}}>Delete
            </button>
        </li>
    );
}

export default Item;
