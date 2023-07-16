import logo from './logo.svg';
import './App.css';
import store from './store/store'
import { Provider } from 'react-redux';
import Counter from './Counter';
import Todo from './Todo';
function App() {
  return (
    <Provider store={store}>
    <div className="betterview">
    <h1>Welcome to React Redux </h1>
    <Counter/>
    <Todo/>
    </div>
    </Provider>
  );
}

export default App;
