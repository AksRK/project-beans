import './Header.scss'

function Header() {

    return (
        <header className={'header'}>
            <h1 className={'header__logo'}>beans</h1>
            <nav className={'header-nav'}>
                <a className={'header-nav__item'} href={'id'}>Кто здесь</a>
                <a className={'header-nav__item'} href={'id'}>Как работаем</a>
                <a className={'header-nav__item'} href={'id'}>Какой подход</a>
                <a className={'header-nav__item'} href={'id'}>Наши продукты</a>
            </nav>
        </header>
    )
}

export default Header;