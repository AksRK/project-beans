import './Footer.scss'

function Footer() {

    return (
        <footer className={'footer'}>
            <div className={'footer__item'}>
                <a href="https://www.google.com/" target="_blank" className={'link link--blue-solid link--size-52px'}>Кейсы</a>
            </div>
            <div className={'footer__item'}>
                <span>2018 → 2022</span>
                <a href="https://www.google.com/" target="_blank" className={'link link--white-solid'}>политика конфиденциальности</a>
                <a href="https://www.google.com/" target="_blank" className={'link link--white-solid'}>персональные данные</a>
            </div>
        </footer>
    )
}

export default Footer;