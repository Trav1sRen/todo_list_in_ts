import {ChangeEvent, useState} from "react";
import "./index.css";
import {TodoType} from "../../App";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {deleteTodoAction, DeleteTodoAction, updateTodoStatusAction, UpdateTodoStatusAction} from "../../redux/action";


const Item = ({id, name, done}: TodoType) => {
    const dispatch = useDispatch<Dispatch<UpdateTodoStatusAction | DeleteTodoAction>>();

    const [mouseState, setMouseState] = useState<boolean>();

    const handleMouse = (flag: boolean) =>
        () => setMouseState(flag);

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateTodoStatusAction(id, event.target.checked));
    }

    const handleClick = () => {
        if (window.confirm('Are u sure to delete this Todo?')) {
            dispatch(deleteTodoAction(id));
        }
    }

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
