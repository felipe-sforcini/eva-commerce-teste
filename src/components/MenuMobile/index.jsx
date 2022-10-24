import './style.css';
import Logo from '../../assets/images/logo.png';
import MenuIcon from '../../assets/svg/menu-hamburguer.svg';
import ProfileIcon from '../../assets/svg/usuario.svg';
import CartIcon from '../../assets/svg/carrinho.svg';
import SearchIcon from '../../assets/svg/busca.svg';
import ArrowCategoriesIcon from '../../assets/svg/seta-categorias.svg';
import { useState } from 'react';

export default function MenuMobile() {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    let classModal = open ? 'modal-categories' : 'hidden';
    let classMenu = menuOpen ? 'container__menu-mobile' : 'hidden';

    function handleModalCategories() {
        open ? setOpen(false) : setOpen(true);
    }

    function handleModalMenu() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

    return (
        <div className='section-menu'>
            <header className='header-mobile'>
                <img className='logo' src={Logo} alt="logo eva commerce" />
                <img
                    className='menu-icon'
                    src={MenuIcon}
                    alt="menu-icon"
                    onClick={() => handleModalMenu()}
                />
            </header>

            <div className={classMenu}>
                <div className='container-navigation'>
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
                    <nav className="categories" onClick={() => handleModalCategories()} >
                        <span>Categorias</span>
                        <img className='navigation-icon color-white' src={ArrowCategoriesIcon} alt="" />
                        <div className={classModal}>
                            <ul>
                                <li>Livros</li>
                                <li>Escritório</li>
                                <li>Vestuário</li>
                                <li>Informática</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}