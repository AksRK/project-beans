import './Tst.scss'
import andImg from '../../assets/images/handwritte/and.svg'
import designersImg from '../../assets/images/handwritte/designers.svg'
import managersImg from '../../assets/images/handwritte/managers.svg'
import weImg from '../../assets/images/handwritte/we.svg'
import ourImg from '../../assets/images/handwritte/our.svg'
import whoImg from '../../assets/images/handwritte/who.svg'
import Navigation from "../../components/Navigation/Navigation";
import HowWeWork from "../../components/HowWeWork/HowWeWork";

function Tst () {

    return (
        <div className={'container'}>
            <div className={'page'}>
                <header className={'header'}>
                    <h1 className={'header__logo'}>beans</h1>
                    <nav className={'header-nav'}>
                        <a className={'header-nav__item'} href={'id'}>Кто здесь</a>
                        <a className={'header-nav__item'} href={'id'}>Как работаем</a>
                        <a className={'header-nav__item'} href={'id'}>Какой подход</a>
                        <a className={'header-nav__item'} href={'id'}>Наши продукты</a>
                    </nav>
                </header>

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
                
                <div id={'id'}></div>

                <section className={'who-is-there'}>
                    <h4 className={'who-is-there__title'}>
                        <img src={whoImg} alt={'Кто'}/>
                        здесь ⋅
                    </h4>
                    <div className={'who-is-there__img-box'}>
                        <div className={'worker-card'}>
                            <span className={'worker-card__title'}>
                                Основатель, дизайн-менеджер:
                            </span>
                            <span className={'worker-card__expert-name'}>
                                Доценко Данил
                            </span>
                        </div>
                        <div className={'worker-card'}>
                            <span className={'worker-card__title'}>
                                Основатель, дизайн-менеджер:
                            </span>
                            <span className={'worker-card__expert-name'}>
                                Бобнев Герман
                            </span>
                        </div>
                    </div>
                    <div className={'who-is-there__description'}>
                        <span>
                            Подберем команду под вашу задачу. Обычно это команда с такими
                            <a className={'link who-is-there__description--link'} href="#id">компетенциями.</a>
                        </span>
                        <span>Можем начать, не имея всех материалов и ответов, импровизируем.</span>
                        <span>
                            Мы обязательно превратим любой новый проект в «первую версию» — выкинем всё, что только
                            можно, оставим главное, и попробуем запустить это как можно скорее.
                        </span>
                    </div>
                </section>

                <HowWeWork/>

                <Navigation/>

            </div>
        </div>
    )
}

export default Tst;