import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import CartPage from "../Pages/CartPage"
import LoginPage from "../Pages/LoginPage"
import ProductDetails from "../Pages/ProductDetails"
import Register from "../Pages/Register"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/Product/:id" element={<ProductDetails/>}></Route>


        </Routes>
    )
}
export default AllRoutes