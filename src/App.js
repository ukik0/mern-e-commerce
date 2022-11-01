import {HomePage} from "./Pages/HomePage";
import {ProductPage} from "./Pages/ProductPage";
import {Login} from "./Pages/Login";
import {Register} from "./Pages/Register";
import {Cart} from "./Pages/Cart";
import {SingleProductPage} from "./Pages/SingleProductPage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/product/:id'} element={<SingleProductPage/>}/>
            <Route path={'/products/:category'} element={<ProductPage/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
    );
}

export default App;
