import Footer from './Pages/Shared/Footer/Footer';

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import PageNotFound from "./Pages/Shared/PageNotFound/PageNotFound";
import Equipments from './Pages/Home/Equipments/Equipments';
import ProductInfo from './Pages/ProductInfo/ProductInfo';

function App() {
  return (
    <div className=''>
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/equipments" element={<Equipments />}></Route>
        <Route path='/product/:productId' element={<ProductInfo />}></Route>


        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
