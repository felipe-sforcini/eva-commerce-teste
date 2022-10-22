import CardIcon from '../../assets/pageLanding/CardIcon';
import PadlockIcon from '../../assets/pageLanding/PadlockIcon';
import TruckIcon from '../../assets/pageLanding/TruckIcon';
import './style.css';

export default function PageLanding() {
    return (
        <div className="container-pageLanding">
            <div className="container-banner">
                <div className="shadow-banner"></div>
                <div className="image-banner"></div>
                <div className="title-banner">
                    <strong>Seus livros Favoritos</strong>
                    <span>estão te esperando aqui!</span>
                </div>
            </div>
            <div className="information-pageLanding">
                <div className="safe-website icon-pageLanding ">
                    <PadlockIcon
                        width='43px'
                        height='50px'
                        color='#E11383'
                        alt='padlock icon'
                    />
                    <span>Site Seguro</span>
                </div>
                <div className="payment-card icon-pageLanding ">
                    <CardIcon
                        width='43px'
                        height='50px'
                        color='#E11383'
                        alt='card icon'
                    />
                    <span>Até 12x sem juros</span>
                </div>
                <div className="delivery icon-pageLanding ">
                    <TruckIcon
                        width='43px'
                        height='50px'
                        color='#E11383'
                        alt='truck icon'
                    />
                    <span>Entrega para todo o Brasil</span>
                </div>
            </div>
        </div>
    )
}