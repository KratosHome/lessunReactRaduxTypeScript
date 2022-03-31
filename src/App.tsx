import React from "react";
import { Provider } from "react-redux";
import { UserList } from "./component/UserList";
import { TodoList } from './component/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList/>
        <hr/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
