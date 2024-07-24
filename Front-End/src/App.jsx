import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import {Toaster} from 'react-hot-toast'
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-0 p-4 h-screen flex items-center justify-center">
        {/* <Toaster> */}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        {/* </Toaster> */}
      </div>
    </>
  );
}

export default App;
