import './Navigation.scss'

function Navigation() {

    return (
            <nav className={'nav'}>
                <a className={'nav__item nav__item--active'} href={'id'}>Бинс</a>
                <a className={'nav__item'} href={'id'}>Кейсы</a>
                <div className={'nav__spacer'}></div>
                <a className={'nav__item'} href={'id'}>Войти</a>
                <a className={'nav__item nav__item--discuss-prj'} href={'id'}>Обсудить проект</a>
            </nav>
    )
}

export default Navigation;