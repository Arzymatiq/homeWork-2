import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const API = "http://localhost:8000/products";
    let [products, setProduct] = useState([]);

    async function fetchProducts() {
        let response = await axios.get(API);
        let toCardList = response.data;
        if (toCardList) {
            setProduct(toCardList);
            return;
        }

        return;
        // console.log(toCardList);
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);
    return (
        <>
            <ProductCard products={products} />
        </>
    );
};

export default ProductList;
