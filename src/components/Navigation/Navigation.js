import './Navigation.scss'
import ModalWindow from "../ModalWindow/ModalWindow";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Navigation() {
    const [modalWindow, setModalWindow] = useState(false)
    const [activePage, setActivePage] = useState(window.location.pathname)

    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false)
        }, [1500])
    }, [modalWindow])

    const linksList = [
        {id:1 , url:'/', text:'Бинс'},
        {id:2 , url:'/cases', text:'Кейсы'},
        {id:'spacer'},
        {id:3 , url:'/auth', text:'Войти'},
    ]

    return (
        <div className={'wrp-nav'}>
            <ModalWindow view={modalWindow}/>
            <nav className={'nav'}>
                {
                    linksList.map((link)=> {
                        if (link.id === 'spacer') {
                            return <div key={link.id} className={'nav__spacer'}></div>
                        }else {
                            return (
                                <Link key={link.id}
                                      to={link.url}
                                      onClick={()=>setActivePage('/project-beans'+link.url)}
                                      className={'nav__item' +
                                          (activePage === '/project-beans'+link.url? ' nav__item--active':'')}
                                >
                                    {link.text}
                                </Link>
                            )
                        }
                    })
                }
                <div onClick={() => setModalWindow(true)}
                     className={'nav__item nav__item--discuss-prj'}>
                    Обсудить проект
                </div>
            </nav>
        </div>

    )
}

export default Navigation;
