import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App(){
 return(
   <div>
   <h1>AI Governance Portal</h1>
   <Register/>
   <Login/>
   <Dashboard/>
   </div>
 );
}

export default App;
