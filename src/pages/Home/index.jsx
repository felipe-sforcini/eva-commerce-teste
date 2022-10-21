import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';
import PageLanding from '../../components/PageLanding';

function Home() {
  return (
    <div className="home">
      <Header />
      <PageLanding />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
