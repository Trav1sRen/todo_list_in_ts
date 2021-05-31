import './index.css';
import {nanoid} from "nanoid";
import {TodoContext} from "../../App";
import {KeyboardEvent, useContext} from 'react';

const Header = () => {
    const {setTodo} = useContext(TodoContext);

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // This assignment is necessary!!!
            const val = event.currentTarget.value;

            if (val.trim() === '') {
                alert('Cannot input empty value!');
                return;
            }

            setTodo(todos => [{
                id: nanoid(),
                name: val,
                done: false
            }, ...todos]);

            event.currentTarget.value = '';
        }
    }

    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="Input the Todo item, Click 'Enter'"/>
        </div>
    );
}

export default Header;