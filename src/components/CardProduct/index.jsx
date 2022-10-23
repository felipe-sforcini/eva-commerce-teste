import { useEffect, useState } from 'react';
import './style.css';

export default function CardProduct({ index, image, name, price, previousPrice }) {

    const [images, setImages] = useState();

    try {
        useEffect(() => {
            async function loadCard() {
                const productImage = await image;
                setImages(productImage.path);
            }
            loadCard();
        }, []);

    } catch (e) {
        console.log(e.message);
    }

    return (
        <div className='container-card'>
            <img className='card-image' key={index} src={images} alt={name} />
            <span className='card-product__title'>{name}</span>
            <div className="prices">
                <span className='card-product__previousPrice'>{previousPrice}</span>
                <strong>R$ {Number(price).toFixed(2).replace('.', ',')}</strong>
            </div>
            <button className='btn-card'>Comprar</button>
        </div>
    )
}