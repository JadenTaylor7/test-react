import React from "react";
import logo from './logo.svg';
import './App.css';
import FunctionDemo from "./components/FunctionDemo";


function App() {
  return (
    <div>
      Function Style Component: <FunctionDemo who="Person!" color="Blue" />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Learning how to use react effectively
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
