import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';
import PageLanding from '../../components/PageLanding';
import Highlights from '../../components/Highlights.jsx';
import MenuMobile from '../../components/MenuMobile';

function Home() {

  return (
    <div className="home">
      <MenuMobile />
      <Header />
      <PageLanding />
      <Highlights />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
