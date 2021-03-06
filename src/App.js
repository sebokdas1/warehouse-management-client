import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import PageNotFound from "./Pages/Shared/PageNotFound/PageNotFound";
import Equipments from './Pages/Home/Equipments/Equipments';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
import LogIn from './Pages/UserLogIn/Login/LogIn';
import Register from './Pages/UserLogIn/Register/Register';
import RequireAuth from './Pages/UserLogIn/RequireAuth/RequireAuth';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import ManageItems from './Pages/ManageItems/ManageItems';
import Reset from './Pages/UserLogIn/Reset/Reset';
import Blog from './Pages/Blog/Blog';
import MyItem from './Pages/MyItem/MyItem';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/equipments" element={<Equipments />}></Route>
        <Route path="/blog" element={<Blog />}></Route>

        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductInfo />
          </RequireAuth>
        }></Route>

        <Route path='/add-product' element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        }></Route>

        <Route path='/my-item' element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        }></Route>

        <Route path='/manage-item' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/reset-password' element={<Reset />}></Route>


        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
