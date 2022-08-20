import './Banner.scss'
import designersImg from "../../assets/images/handwritte/designers.svg";
import andImg from "../../assets/images/handwritte/and.svg";
import managersImg from "../../assets/images/handwritte/managers.svg";

function Banner() {

    function buttonInfoText() {

        return (
            <div className={'btn-info-'}>

            </div>
        )
    }

    return (
        <section className={'banner'}>
            <h2 className={'page-title'}>
                Команда
                <img src={designersImg} alt={'Дизайнеров'}/>
                <img src={andImg} alt={'И'}/>
                <img src={managersImg} alt={'Менеджеров'}/>
                для запуска вашего продукта
                <button className={'btn-info'}>1</button>
            </h2>
            <span className={'banner__description'}>
                        Сегодня люди требуют от продуктов большего, чем когда-либо прежде. Они ожидают, что бренд будет
                        не только соответствовать их ожиданиям, но и выходить за рамки. Недостаточно делать только
                        отличный дизайн.
            </span>
        </section>
    )
}

export default Banner;