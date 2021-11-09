import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import Product from "../components/Product"

export default () => {
    const [products, setProducts]  = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products)
                products = setProducts
            })
            .catch(err => console.log("ERROR: ", err))
    }, [])
    console.log(products)
    return (
        <>
        <Route exact path = "/api/products">
            <div>
                    <ProductForm />
            </div>
            <hr/>
            <div>
                <ProductList products = {products}/>
            </div>
        </Route>
        <Route exact path = "/api/products/:id">
            <Product/>
        </Route>

        </>
    )
}