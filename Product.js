import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

const Product = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    console.log(id)
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id )
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [id]);

    return (
        <div>
            <h2>
                {product.title}
            </h2>
            <h3>
                Price: ${product.price}
            </h3>
            <h3>
                Description: {product.description}
            </h3>
            <br/>
            <Link to = {"/api/products"}>Back Home</Link>
        </div>
    )
}
export default Product