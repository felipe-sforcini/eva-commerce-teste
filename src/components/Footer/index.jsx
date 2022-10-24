import './style.css';
import StoreIcon from '../../assets/footer/StoreIcon';
import MapIcon from '../../assets/footer/MapIcon';
import WhatsAppIcon from '../../assets/footer/WhatsAppIcon';
import EmailIcon from '../../assets/footer/EmailIcon';
import FooterLine from '../../assets/svg/footer-line.svg';

export default function Footer() {
    return (
        <footer>
            <strong>Eva Shop</strong>
            <img src={FooterLine} alt="gray line" />
            <div className='info'>
                <div className="container container-menu__footer">
                    <nav className='navigation-menu'>
                        <div className="icon-footer">
                            <StoreIcon
                                width='22px'
                                height='18px'
                                color='#E11383'
                                alt="icon store" />
                        </div>
                        <ul>
                            <li> <a href="#">Quem somos</a></li>
                            <li><a href="#">Políticas de privacidade</a></li>
                            <li><a href="#">Feedback de clientes</a></li>
                            <li><a href="#"> Trocas e devoluções</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="container container-adress">
                    <div className="icon-footer">
                        <MapIcon
                            width='22px'
                            height='18px'
                            color='#E11383'
                            alt='map icon'
                        />
                    </div>
                    <span className='adress'>Rua Av. Rio Negro, 1100</span>
                    <span className='adress'>Jardim Roselandia</span>
                    <span className='adress'>14406-005</span>
                    <span className='adress'>Franca / SP</span>
                </div>
                <div className="container container-contact">
                    <div className="icon-footer">
                        <StoreIcon
                            width='22px'
                            height='18px'
                            color='#E11383'
                            alt="icon store" />
                    </div>
                    <div className="contact">
                        <WhatsAppIcon
                            width="14px"
                            height="14px"
                            color="#DADFEB"
                            alt="whatsapp icon" />
                        <span>(16) 9 98179-7325</span>
                    </div>
                    <div className="contact">
                        <EmailIcon
                            width="14px"
                            height="14px"
                            color="#DADFEB"
                            alt="email icon"
                        />
                        <span>contato@evacommerce.com.br</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}