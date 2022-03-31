import React from "react";
import { Provider } from "react-redux";
import { UserList } from "./component/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList/>
      </header>
    </div>
  );
}

export default App;
