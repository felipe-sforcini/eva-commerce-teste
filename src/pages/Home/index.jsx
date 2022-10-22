import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';
import PageLanding from '../../components/PageLanding';
import Highlights from '../../components/Highlights.jsx';
import { useState, useEffect } from 'react';
import api from '../../services/api';

function Home() {

  const [products, setProducts] = useState([]);
  // const [productsAux, setProductsAux] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 4
  });

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
    <div className="home">
      <Header />
      <PageLanding />
      <Highlights
        products={products}
        setProducts={setProducts}
        pagination={pagination}
        setPagination={setPagination}
      />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
