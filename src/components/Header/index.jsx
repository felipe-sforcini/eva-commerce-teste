import './style.css';
import Logo from '../../assets/images/logo.png';

export default function Header() {
    return (
        <header>
            <img className='logo' src={Logo} alt="logo eva commerce" />
            <div className='container-navigation'>
                <nav className="categories">
                    <span>Categorias</span>
                </nav>
                <div className="input">
                    <input type="text" />
                </div>
                <nav className="myAccount">
                    <span>Minha conta</span>
                </nav>
                <nav className="cart">
                    <span>Carrinho</span>
                </nav>
            </div>
        </header>
    )
}