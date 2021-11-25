import './index.css';
import {nanoid} from "nanoid";
import {KeyboardEvent} from 'react';
import {useRecoilState} from "recoil";
import {todoListState} from "../../recoil/atom";
import {TodoType} from "../../App";


const Header = () => {
    const [, setTodos] = useRecoilState<TodoType[]>(todoListState);

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // This assignment is necessary!!!
            const val = event.currentTarget.value;

            if (val.trim() === '') {
                alert('Cannot input empty value!');
                return;
            }

            setTodos(todos => [{
                id: nanoid(),
                name: val,
                done: false
            }, ...todos])

            event.currentTarget.value = '';
        }
    };

    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="Input the Todo item, Click 'Enter'"/>
        </div>
    );
}

export default Header;
