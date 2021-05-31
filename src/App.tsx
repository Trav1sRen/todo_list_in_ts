import './App.css';
import {createContext, Dispatch, SetStateAction, useState} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export type TodoType = {
    id: string,
    name: string,
    done: boolean
};

export const TodoContext = createContext<{
    todos: TodoType[],
    setTodo: Dispatch<SetStateAction<TodoType[]>>
}>({
        todos: [],
        setTodo: () => {}
    }
);

const App = () => {
    const [todos, setTodo] = useState<TodoType[]>([]);

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <TodoContext.Provider value={{todos, setTodo}}>
                    <Header/>
                    <List/>
                    <Footer/>
                </TodoContext.Provider>
            </div>
        </div>
    );
}


export default App;