import './style.css';
import CardProduct from '../CardProduct';
import PreviousArrow from '../../assets/svg/previous-arrow.svg';
import NextArrow from '../../assets/svg/next-arrow.svg';

export default function Highlights({ products, setProducts, pagination, setPagination }) {

    function handlePagination(value) {
        let start = pagination.start;
        let end = pagination.end;

        if (value === 'previous' && start > 0) {
            start -= 4;
            end -= 4;
        } else if (value === 'next' && end < products.length) {
            start += 4;
            end += 4;
        }
        setPagination({
            start, end
        });
    }

    return (
        <div className="container-highlights">
            <img className='previous-arrow' onClick={() => handlePagination('previous')} src={PreviousArrow} alt="previous arrow" />
            {products.slice(pagination.start, pagination.end).map((product) => {
                return (
                    <CardProduct
                        key={product.id}
                        image={product.images_product[0]}
                        name={product.name}
                        price={product.price}
                    />
                )
            })}
            <img className='next-arrow' onClick={() => handlePagination('next')} src={NextArrow} alt="next arrow" />
        </div>
    )
}