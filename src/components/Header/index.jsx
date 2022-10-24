import './style.css';
import Logo from '../../assets/images/logo.png';
import ProfileIcon from '../../assets/svg/usuario.svg';
import CartIcon from '../../assets/svg/carrinho.svg';
import SearchIcon from '../../assets/svg/busca.svg';
import ArrowCategoriesIcon from '../../assets/svg/seta-categorias.svg'
import { useState } from 'react';

export default function Header() {

    const [open, setOpen] = useState(false);

    let classModal = open ? 'modal-categories' : 'hidden';

    function handleModalCategories() {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <header>
            <img className='logo' src={Logo} alt="logo eva commerce" />
            <div className='container-navigation'>
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