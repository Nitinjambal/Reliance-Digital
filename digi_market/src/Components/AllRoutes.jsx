import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import CartPage from "../Pages/CartPage"
import LoginPage from "../Pages/LoginPage"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
    )
}
export default AllRoutes