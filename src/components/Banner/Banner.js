import './Banner.scss'
import designersImg from "../../assets/images/handwritte/ru/designers.svg";
import andImg from "../../assets/images/handwritte/ru/and.svg";
import managersImg from "../../assets/images/handwritte/ru/managers.svg";
import andManagersImg from '../../assets/images/handwritte/ru/and-managers.svg'
import PopUp from "../UI/PopUp/PopUp";

function Banner() {
    const mobVersion = 479

    return (
        <section className={'banner'}>
            <h2 className={'page-title'}>
                Команда
                <span className={'beans-style beans-style--page-title'}> дизайнеров</span>
                <span className={'beans-style beans-style--page-title'}>и</span>
                <span className={'beans-style beans-style--page-title'}>менеджеров</span>
                <span>для</span>
                <span>запуска вашего продукта
                <PopUp
                    mark={'1'}
                    text={'Продукт — это то, что вы хотите продать,' +
                        ' и мы помогаем ему «зайти в рынок» и масштабироваться.'}
                    windowPosition={{left: '60px', bottom:'-85px'}}
                    markPosition={window.screen.width <= mobVersion? {top:'-15px'}: {top:'-30px'}}
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
