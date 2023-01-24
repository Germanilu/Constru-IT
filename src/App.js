import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;