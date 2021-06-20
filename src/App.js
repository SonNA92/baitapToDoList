
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ToDoList from './Pages/ToDoList/ToDoList';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/todolist" component={ToDoList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
