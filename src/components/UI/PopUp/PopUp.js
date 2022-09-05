import './PopUp.scss'
import {useState} from "react";

function PopUp({mark, text, styleMark, windowPosition, markPosition}) {
    const [viewWindow, setViewWindow] = useState(false)
    const mobileVersion = 479

    function markStyle() {
        if (styleMark === 'white') {
            return 'pop-up__mark pop-up__mark--pos-absolute pop-up__mark--white'
        }else {
            if (viewWindow) {
                return 'pop-up__mark pop-up__mark--active pop-up__mark--pos-absolute'
            }else {
                return 'pop-up__mark pop-up__mark--pos-absolute'
            }
        }
    }

    function popUpButton() {
        const page = document.querySelector('.page')
        setViewWindow(true)
        if (window.screen.width <= mobileVersion) {
            page.classList.add('page--no-scroll')
        }

    }

    function pageScroll() {
        const page = document.querySelector('.page')
        setViewWindow(false)
        page.classList.remove('page--no-scroll')
    }

    return (
        <div className={'pop-up'}>
            <button
                onClick={popUpButton}
                className={markStyle() }
                style={markPosition}
            >{mark}</button>
            {
                viewWindow ?
                    <>
                        {
                            viewWindow && window.screen.width <= mobileVersion ?
                                <div onClick={pageScroll} className={'background-pop-up'}></div>
                                :''
                        }

                        <div style={window.screen.width >= mobileVersion ? windowPosition : {}} className={'pop-up__window'}>
                            <span className={'pop-up__mark pop-up__mark--active'}>{mark}</span>
                            {text}
                            <button onClick={pageScroll} className={'pop-up__close'}></button>
                        </div>
                    </>
                     :
                    ''
            }
        </div>
    )
}

export default PopUp;