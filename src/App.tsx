import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import store from "./redux/store";

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Provider store={store}>
          <Header />
          <List />
          <Footer />
        </Provider>
      </div>
    </div>
  );
};

export default App;
