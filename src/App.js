import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home.jsx"
import Register from "./Containers/Register/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/register' element= {<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
