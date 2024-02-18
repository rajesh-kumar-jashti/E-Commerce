import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import men_banner from './Components/Assets/product_23.png';
import women_banner from './Components/Assets/product_9.png';
import kids_banner from './Components/Assets/product_28.png';
import Topwear from './Components/TopWear/Topwear';
import Bottomwear from './Components/BottomWear/Bottomwear';
import Accessories from './Components/Accessories/Accessories';
import Footwear from './Components/FootWear/Footwear';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/men/topwear' element={<Topwear category="men" type="topwear"/>} />
          <Route path='/men/bottomwear' element={<Topwear category="men" type="bottomwear"/>} />
          <Route path='/men/footwear' element={<Topwear category="men" type="footwear"/>} />
          <Route path='/men/accessories' element={<Topwear category="men" type="accessories"/>} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
          <Route path='/kids/topwear' element={<Topwear/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
