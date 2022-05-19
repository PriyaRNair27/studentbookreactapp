import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Log from './Component/Log';
import Register from './Component/Register';
import Addbook from './Component/Addbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        
        <Route path="/" exact element={<Addbook/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
