import './style.css';
import CardProduct from '../CardProduct';
import PreviousArrow from '../../assets/svg/previous-arrow.svg';
import NextArrow from '../../assets/svg/next-arrow.svg';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import PurpleLine from '../../assets/svg/purple-line.svg';

export default function CategoryHighlight({ index }) {

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState([]);
    const [pagination, setPagination] = useState({
        start: 0,
        end: 4
    });
    const [paginationMobile, setPaginationMobile] = useState({
        start: 0,
        end: 2
    });
    const [previousPrice, setPreviousPrice] = useState([]);

    try {
        useEffect(() => {
            async function loadItems() {
                const response = await api.get(`products`);
                const data = await response.data;

                if (index) {
                    const allItems = await data.filter(item => item.category_id === Number(index));

                    const responseCategory = await api.get(`category/${index}`);
                    const categoryName = await responseCategory.data.name;

                    setCategory(categoryName);
                    setItems(allItems);
                } else {
                    setItems(data);
                }
            }
            loadItems();
        }, []);
    } catch (e) {
        console.log(e.message);
    }

    function handlePagination(value) {
        let start = pagination.start;
        let end = pagination.end;

        if (value === 'previous' && start > 0) {
            start -= 4;
            end -= 4;
        } else if (value === 'next' && end < items.length) {
            start += 4;
            end += 4;
        }
        setPagination({
            start, end
        });
    }

    function handlePaginationMobile(value) {
        let start = paginationMobile.start;
        let end = paginationMobile.end;

        if (value === 'previous' && start > 0) {
            start -= 2;
            end -= 2;
        } else if (value === 'next' && end < items.length) {
            start += 2;
            end += 2;
        }
        setPaginationMobile({
            start, end
        });
    }

    return (
        <>
            <section className='section-highlights'>
                <div className='title-highlight'>
                    <img src={PurpleLine} alt="purple line" />
                    <h1 >{!index ? `Destaques` : `Destaques em ${category}`}</h1>
                </div>
                <div className='container-highlights'>
                    <img className='previous-arrow' onClick={() => handlePagination('previous')} src={PreviousArrow} alt="previous arrow" />
                    <div className="container-cards">
                        {items.slice(pagination.start, pagination.end).map((product) => (
                            <CardProduct
                                key={product.id}
                                image={product.images_product[0]}
                                name={product.name}
                                price={product.promotional_price ? product.promotional_price : product.price}
                                previousPrice={product.promotional_price ? `R$ ${Number(product.price).toFixed(2).replace('.', ',')}` : null}
                                stars={product.stars}
                            />
                        ))}
                    </div>
                    <img className='next-arrow' onClick={() => handlePagination('next')} src={NextArrow} alt="next arrow" />
                </div>
            </section>

            <section className='section-highlights-mobile'>
                <div className='title-highlight'>
                    <img src={PurpleLine} alt="purple line" />
                    <h1 >{!index ? `Destaques` : `Destaques em ${category}`}</h1>
                </div>
                <div className='container-highlights'>
                    <img className='previous-arrow' onClick={() => handlePaginationMobile('previous')} src={PreviousArrow} alt="previous arrow" />
                    <div className="container-cards">
                        {items.slice(paginationMobile.start, paginationMobile.end).map((product) => (
                            <CardProduct
                                key={product.id}
                                image={product.images_product[0]}
                                name={product.name}
                                price={product.promotional_price ? product.promotional_price : product.price}
                                previousPrice={product.promotional_price ? `R$ ${Number(product.price).toFixed(2).replace('.', ',')}` : null}
                                stars={product.stars}
                            />
                        ))}
                    </div>
                    <img className='next-arrow' onClick={() => handlePaginationMobile('next')} src={NextArrow} alt="next arrow" />
                </div>
            </section>
        </>
    )
}