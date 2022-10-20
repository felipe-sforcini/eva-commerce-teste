import './style.css';
import Logo from '../../assets/images/logo.png';
import ProfileIcon from '../../assets/svg/usuario.svg';
import CartIcon from '../../assets/svg/carrinho.svg';
import SearchIcon from '../../assets/svg/busca.svg';
import ArrowCategoriesIcon from '../../assets/svg/seta-categorias.svg'

export default function Header() {
    return (
        <header>
            <img className='logo' src={Logo} alt="logo eva commerce" />
            <div className='container-navigation'>
                <nav className="categories">
                    <span>Categorias</span>
                    <img className='navigation-icon color-white' src={ArrowCategoriesIcon} alt="" />
                </nav>
                <div className="search">
                    <input type="text" />
                    <img className='search-icon navigation-icon' src={SearchIcon} alt="search icon" />
                </div>
                <nav className="myAccount">
                    <span>Minha conta</span>
                    <img className='navigation-icon color-white' src={ProfileIcon} alt="profile icon" />
                </nav>
                <nav className="cart">
                    <span>Carrinho</span>
                    <img className='navigation-icon color-white' src={CartIcon} alt="cart icon" />
                </nav>
            </div>
        </header>
    )
}