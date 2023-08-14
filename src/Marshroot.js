import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/CRUD/AddProduct";
import ProductList from "./components/CRUD/ProductList";

const Marshroot = ({ addProduct }) => {
    return (
        <Routes>
            <Route
                path="/addProduct"
                element={<AddProduct addProduct={addProduct} />}
            />
            <Route path="/" element={<ProductList />} />
        </Routes>
    );
};

export default Marshroot;
