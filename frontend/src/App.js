import './App.css';
 import CreateUser from './Components/CreateUser.js';

 import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ShowData from './Components/ShowData.js';

function App() {
  return (
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<CreateUser />}/>
    <Route path="/getUsers" element={<ShowData />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
