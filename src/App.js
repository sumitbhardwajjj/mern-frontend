import './App.css';
import Addproduct from './components/Addproduct';
import Home from './components/Home';
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/products' element={<Home/>}/>
      <Route path='/add' element={<Addproduct/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
