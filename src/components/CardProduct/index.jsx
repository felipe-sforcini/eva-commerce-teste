import { useEffect, useState } from 'react';
import './style.css';
import FullStar from '../../assets/svg/estrela-cheia.svg';
import EmptyStar from '../../assets/svg/estrela.svg';

export default function CardProduct({ index, image, name, price, previousPrice, stars }) {

    const [images, setImages] = useState();
    const [rating, setRating] = useState(0);
    const [off, setOff] = useState(5);
    const Stars = Array(5).fill("");

    try {
        useEffect(() => {
            async function loadCard() {
                const productImage = await image;
                setImages(productImage.path);
                setRating(stars);
                if (price > 200) {
                    setOff(15);
                } else if (price > 80) {
                    setOff(10);
                } else {
                    setOff(5);
                }
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
                    return (
                        <img src={starColor} key={k} />
                    );
                })}
            </div>
            <div className="prices">
                <span className='card-product__previousPrice'>{previousPrice}</span>
                <strong>R$ {Number(price).toFixed(2).replace('.', ',')}</strong>
                <span className='off-price'>
                    Ou R$ {(price - (off / 100 * (price))).toFixed(2).replace('.', ',')} com {off}% off no boleto
                </span>
            </div>
            <button className='btn-card'>Comprar</button>
        </div>
    )
}