import { Route, Routes } from "react-router-dom";
import Payment from "./payment";
import Reviews from "./reviews";
import Employee from "./employeedetails";
import Rider from "./riderdetails";
import Dashboard from "./dashboard";
import Home from "./homepage";
import Categories from "./categories";
import Products from "./products";
import Customers from "./customerdetails";
import Orderdetails from "./orderdetails";

export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customerdetails" element={<Customers />} />
        <Route path="/orderdetails" element={<Orderdetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/employeedetails" element={<Employee />} />
        <Route path="/riderdetails" element={<Rider />} />
      </Routes>
    </div>
  );
}
