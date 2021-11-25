import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import {RecoilRoot} from "recoil";

export type TodoType = {
    id: string,
    name: string,
    done: boolean
};

const App = () => {
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <RecoilRoot>
                    <Header/>
                    <List/>
                    <Footer/>
                </RecoilRoot>
            </div>
        </div>
    );
}

export default App;
