import logo from './logo.svg';
import './App.css';
import Login from './componets/Login';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Home from './componets/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <div className="App">
     <Routes>
      <Route path ="/" element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
