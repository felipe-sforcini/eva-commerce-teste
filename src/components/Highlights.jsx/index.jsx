import { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';
import CardProduct from '../CardProduct';

export default function Highlights({ id }) {
    const [products, setProducts] = useState([]);

    try {
        useEffect(() => {
            async function loadProducts() {
                const response = await api.get(`products`);

                const data = await response.data;
                setProducts(data);
            }
            loadProducts();
        }, []);
    } catch (e) {
        console.log(e.message);
    }

    return (
        <div className="container-highlights">
            {products.map((product, index) => {
                return (
                    <CardProduct
                        key={index}
                        image={product.images_product[0]}
                        name={product.name}
                        price={product.price}
                    />
                )
            })}
        </div>
    )
}