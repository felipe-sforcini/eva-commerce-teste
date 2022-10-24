import './style.css';
import NewsletterIcon from '../../assets/svg/newsletter.svg';
import { useState } from 'react';

export default function Newsletter() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        setError('');
        setSuccess('');

        if (!name) {
            setError('O nome é obrigatório...');
            return;
        }

        if (!email) {
            setError('O e-mail é obrigatório...');
            return;
        }

        setSuccess('Cadastro efetuado com sucesso!');
    }

    return (
        <div className="container-newsletter">
            <section className='title'>
                <img className='newsletter-icon' src={NewsletterIcon} alt="newsletter icon" />
                <span>Receba nossas novidades, descontos e muito mais</span>
            </section>
            <form className='formSubmit' onSubmit={handleSubmit}>
                <div className='container-inputs__form'>
                    <input
                        className='form'
                        type="text"
                        placeholder='Digite seu nome'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        className='form'
                        type="email"
                        placeholder='Digite seu email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                {error && <span className='error'>{error}</span>}
                {success && <span className='success'>{success}</span>}
                <button className='btn-newsletter' type='submit'>Eu quero receber novidades!</button>
            </form>
        </div>
    )
}