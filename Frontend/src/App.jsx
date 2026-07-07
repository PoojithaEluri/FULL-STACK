import {BrowserRouter, Route,Routes} from "react-router-dom";
import Navbar from "./components/Navigation";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

export default function App(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Users/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/orders" element={<Orders/>}/>
            </Routes>
        </BrowserRouter>
    );
}