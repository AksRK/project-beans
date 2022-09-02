import './PopUp.scss'
import {useState} from "react";

function PopUp({mark, text, styleMark, windowPosition}) {
    const [viewWindow, setViewWindow] = useState(false)

    function markStyle() {
        if (styleMark === 'white') {
            return 'pop-up__mark pop-up__mark--pos-absolute pop-up__mark--white'
        }else {
            return 'pop-up__mark pop-up__mark--pos-absolute'
        }
    }

    return (
        <div className={'pop-up'}>
            <button onClick={() => setViewWindow(true)} className={markStyle() +
                (viewWindow?' pop-up__mark--active': '')}>{mark}</button>
            {
                viewWindow ?
                    <div style={windowPosition} className={'pop-up__window'}>
                        <span className={'pop-up__mark pop-up__mark--active'}>{mark}</span>
                        {text}
                        <button onClick={() => setViewWindow(false)} className={'pop-up__close'}></button>
                    </div> :
                    ''
            }

        </div>
    )
}

export default PopUp;