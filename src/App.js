import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Log from './Component/Log';
import Register from './Component/Register';
import Addbook from './Component/Addbook';

function App() {
  return (
    <div >
      <Log/>
      <Register/>
      <Addbook/>
    </div>
  );
}

export default App;
