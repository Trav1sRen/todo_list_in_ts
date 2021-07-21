import Item from "../Item";
import './index.css';
import {TodoType} from "../../App";
import {useSelector} from "react-redux";

const List = () => {
    const todos = useSelector<TodoType[], TodoType[]>(state => state);

    return (
        <ul className="todo-main">
            {todos.map(todo => <Item key={todo.id} {...todo}/>)}
        </ul>
    );
}

export default List;