import Item from "../Item";
import './index.css';
import {useRecoilValue} from "recoil";
import {TodoType} from "../../App";
import {todoListState} from "../../recoil/atom";

const List = () => {
    const todos = useRecoilValue<TodoType[]>(todoListState);

    return (
        <ul className="todo-main">
            {todos.map(todo => <Item key={todo.id} {...todo}/>)}
        </ul>
    );
}

export default List;