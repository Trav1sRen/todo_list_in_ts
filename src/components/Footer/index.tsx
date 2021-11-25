import {ChangeEvent} from 'react';
import "./index.css";
import {useRecoilState} from "recoil";
import {TodoType} from "../../App";
import {todoListState} from "../../recoil/atom";

const Footer = () => {
    const [todos, setTodos] = useRecoilState<TodoType[]>(todoListState);

    const handleCheck = ({target: {checked}}: ChangeEvent<HTMLInputElement>) =>
        setTodos(todos => todos.map(todo => ({...todo, done: checked})));

    const handleClick = () =>
        setTodos(todos => todos.filter(({done}) => !done));

    return (
        <div className="todo-footer">
            <label>
                <input checked={todos.length !== 0 && todos.length === todos.filter(todo => todo.done).length}
                       onChange={handleCheck}
                       type="checkbox"/>
            </label>
            <span>
                <span>Done: {todos.filter(todo => todo.done).length}</span> / All: {todos.length}
            </span>
            <button onClick={handleClick} className="btn btn-danger">Clear done items</button>
        </div>
    );
}

export default Footer;