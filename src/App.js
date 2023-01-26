import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home.jsx"
import Register from "./Containers/Register/Register.jsx";
import Login from "./Containers/Login/Login.jsx";
import Dashboard from "./Containers/Dashboard/Dashboard.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/dashboard' element= {<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
