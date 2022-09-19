import './Banner.scss'
import designersImg from "../../assets/images/handwritte/ru/designers.svg";
import andImg from "../../assets/images/handwritte/ru/and.svg";
import managersImg from "../../assets/images/handwritte/ru/managers.svg";
import andManagersImg from '../../assets/images/handwritte/ru/and-managers.svg'
import PopUp from "../UI/PopUp/PopUp";

function Banner() {

    return (
        <section className={'banner'}>
            <h2 className={'page-title'}>
                Команда
                <img src={designersImg} alt={'Дизайнеров'}/>
                {/*<img src={andImg} alt={'И'}/>*/}
                {/*<img src={managersImg} alt={'Менеджеров'}/>*/}
                <img src={andManagersImg} alt={'И менеджеров'}/>
                <span style={{marginRight:'20px'}}>для</span>
                <span>запуска вашего продукта
                <PopUp
                    mark={'1'}
                    text={'Продукт — это то, что вы хотите продать,' +
                        ' и мы помогаем ему «зайти в рынок» и масштабироваться.'}
                    windowPosition={{left: '60px', bottom:'-85px'}}
                    markPosition={window.screen.width <= 420 ? {top:'-15px'}: {top:'-25px'}}
                />
                </span>

            </h2>
            <span className={'page-description'}>
                        Сегодня люди требуют от продуктов большего, чем когда-либо прежде. Они ожидают, что бренд будет
                        не только соответствовать их ожиданиям, но и выходить за рамки. Недостаточно делать только
                        отличный дизайн.
            </span>
        </section>
    )
}

export default Banner;
