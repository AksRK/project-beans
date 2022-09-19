import './Header.scss'

function Header() {

    return (
        <header className={'header'}>
            <h1 className={'header__logo'}>beans</h1>
            <nav className={'header-nav'}>
                <a className={'header-nav__item'} href={'#WhoIsThere'}>Кто здесь</a>
                <a className={'header-nav__item'} href={'#HowWeWork'}>Как работаем</a>
                <a className={'header-nav__item'} href={'#OurApprouch'}>Какой подход</a>
                <a className={'header-nav__item'} href={'#OurProjects'}>Наши продукты</a>
            </nav>
        </header>
    )
}

export default Header;
