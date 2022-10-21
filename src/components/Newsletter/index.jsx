import './style.css';
import NewsletterIcon from '../../assets/svg/newsletter.svg';

export default function Newsletter() {
    return (
        <div className="container-newsletter">
            <section className='title'>
                <img className='newsletter-icon' src={NewsletterIcon} alt="newsletter icon" />
                <span>Receba nossas novidades, descontos e muito mais</span>
            </section>
            <section className='formSubmit'>
                <input className='form' type="text" placeholder='Digite seu nome' />
                <input className='form' type="email" placeholder='Digite seu email' />
            </section>
            <button className='btn-newsletter' type='submit'>Eu quero receber novidades!</button>
        </div>
    )
}