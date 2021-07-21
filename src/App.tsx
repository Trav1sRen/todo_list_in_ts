import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import {Provider} from 'react-redux';
import todoListStore from './redux/store'

export type TodoType = {
    id: string,
    name: string,
    done: boolean
};

const App = () => {
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Provider store={todoListStore}>
                    <Header/>
                    <List/>
                    <Footer/>
                </Provider>
            </div>
        </div>
    );
}

export default App;
