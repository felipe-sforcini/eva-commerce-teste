import { useEffect, useState } from 'react';
import './style.css';
import FullStar from '../../assets/svg/estrela-cheia.svg';
import EmptyStar from '../../assets/svg/estrela.svg';

export default function CardProduct({ index, image, name, price, previousPrice, stars }) {

    const [images, setImages] = useState();
    const [rating, setRating] = useState(0);
    const Stars = Array(5).fill("");

    try {
        useEffect(() => {
            async function loadCard() {
                const productImage = await image;
                setImages(productImage.path);
                setRating(stars);
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
            <div className="stars">
                {Stars.map((star, k) => {
                    const ratingValue = k + 1;
                    const starColor = ratingValue <= rating ? `${FullStar}` : `${EmptyStar}`
                    console.log(starColor);
                    return (
                        <img src={starColor} key={k} />
                    );
                })}
            </div>
            <div className="prices">
                <span className='card-product__previousPrice'>{previousPrice}</span>
                <strong>R$ {Number(price).toFixed(2).replace('.', ',')}</strong>
            </div>
            <button className='btn-card'>Comprar</button>
        </div>
    )
}