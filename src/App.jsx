import './App.css';
import Addproduct from './components/Addproduct';
import Home from './components/Home';
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Cart from './components/Cart';
import { useSelector} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  const darkMode = useSelector(state=>state.cart.darkMode)



  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/products' element={<Home darkMode={darkMode}/>}/>
      <Route path='/add' element={<Addproduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
