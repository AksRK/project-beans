import './Footer.scss'

function Footer() {

    return (
        <footer className={'footer'}>
            <div className={'footer__item'}>
                <a href="https://www.google.com/"
                   target="_blank"
                   rel="noreferrer"
                   className={'link link--blue-solid link--size-52px'}>
                    <span>Кейсы</span>
                </a>
            </div>
            <div className={'footer__item'}>
                <span>2018 → 2022</span>
                <a href="https://www.google.com/"
                   target="_blank"
                   rel="noreferrer"
                   className={'link link--white-solid'}>
                    <span>политика конфиденциальности</span>
                </a>
                <a href="https://www.google.com/"
                   target="_blank"
                   rel="noreferrer"
                   className={'link link--white-solid'}>
                    <span>персональные данные</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
