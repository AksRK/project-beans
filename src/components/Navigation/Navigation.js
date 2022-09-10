import './Navigation.scss'
import ModalWindow from "../ModalWindow/ModalWindow";
import {useEffect, useState} from "react";

function Navigation() {
    const [modalWindow, setModalWindow] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false)
        }, [1500])
    }, [modalWindow])

    return (
        <div className={'wrp-nav'}>
            <ModalWindow view={modalWindow}/>
            <nav className={'nav'}>
                <a className={'nav__item nav__item--active'} href={'id'}>Бинс</a>
                <a className={'nav__item'} href={'id'}>Кейсы</a>
                <div className={'nav__spacer'}></div>
                <a className={'nav__item'} href={'id'}>Войти</a>
                <div onClick={() => setModalWindow(true)} className={'nav__item nav__item--discuss-prj'} href={'id'}>Обсудить проект</div>
            </nav>
        </div>

    )
}

export default Navigation;