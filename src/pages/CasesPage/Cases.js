import './Cases.scss'
import Logo from "../../components/UI/Logo/Logo";
import {Link} from "react-router-dom";
import caseImg1 from '../../assets/images/cases-img/case-img-1.svg'
import caseImg2 from '../../assets/images/cases-img/case-img-2.svg'
import caseImg3 from '../../assets/images/cases-img/case-img-3.svg'
import caseImg4 from '../../assets/images/cases-img/case-img-4.svg'
import caseImg5 from '../../assets/images/cases-img/case-img-5.svg'
import caseImg6 from '../../assets/images/cases-img/case-img-6.svg'
import caseImgHand from '../../assets/images/cases-img/case-img-hand.svg'
import servImg1 from "../../assets/images/serv-cat/serv-cat-1.svg";
import servImg2 from "../../assets/images/serv-cat/serv-cat-2.svg";
import servImg3 from "../../assets/images/serv-cat/serv-cat-3.svg";
import servImg4 from "../../assets/images/serv-cat/serv-cat-5.svg";

function Cases() {

    const handleScroll = event => {
        const hand = document.getElementById('hand-anim')
        hand.style.top = '-'+((event.target.scrollTop - 180) / 6) + 'px'
    }

    return (
        <div onScroll={handleScroll} className={'page'}>
            <section className={'page__item'}>
                <Logo/>

                <section className={'cases'}>
                    <section className={'page__banner'}>
                        <h2 className={'page-title'}>Кейсы</h2>
                        <span className={'page-description page-description--width-850px'}>
                            Мы что-то вроде внешнего отдела дизайна и разработки и фреймворка для
                            организации команд. Обычно мы делаем или весь дизайн или новый продукт.
                        </span>
                    </section>
                    <section className={'cases-demonstration'}>
                        <div className={'cases-demonstration__item'}>
                            <h3 className={'cases-demonstration__title'}>
                                Сметная
                                лаборатория
                            </h3>
                            <span className={'cases-demonstration__description ' +
                                             'cases-demonstration__description--max-width-255px'}>
                                Онлайн-школа по сметному
                                делу. Нас позвали создать бизнес с нуля.
                            </span>
                            <ul className={'cases-list'}>
                                <li className={'cases-list__item '}>
                                    <div className={'cases-list__img-wrp'}>
                                        <img className={'cases-list__img'} src={caseImg1} alt={'caseImg1'}/>
                                    </div>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>1.</span>
                                        <Link className={'link link--black'} to={'/name-and-logo'}>
                                            <span>Нейминг</span>
                                            <span> и логотип</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className={'cases-list__item '}>
                                    <div className={'cases-list__img-wrp'}>
                                        <img className={'cases-list__img'} src={caseImg2} alt={'caseImg2'}/>
                                    </div>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>2.</span>
                                        <Link className={'link link--black'} to={''}>
                                            <span>Бренд-</span>
                                            <span>платформа</span>
                                        </Link>
                                    </div>
                                </li>
                                <li id={'hand-anim'} className={'cases-list__item '}>
                                    <div className={'cases-list__img-wrp'}>
                                        <img className={'cases-list__img cases-list__img--hand'} src={caseImgHand} alt={'caseImgHand'}/>
                                    </div>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>3.</span>
                                        <Link className={'link link--black'} to={''}>
                                            <span>Дизайн</span>
                                            <span>сайта</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className={'cases-list__item '}>
                                    <img className={'cases-list__img'} src={caseImg3} alt={'caseImg3'}/>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>4.</span>
                                        <Link className={'link link--black'} to={'/mini-course'}>
                                            <span>Мини</span>
                                            <span>курс</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className={'cases-list__item '}>
                                    <img className={'cases-list__img'} src={caseImg4} alt={'caseImg4'}/>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>5.</span>
                                        <Link className={'link link--black'} to={''}>
                                            <span>Продажи</span>
                                        </Link>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div className={'cases-demonstration__item cases-demonstration__item--secondary'}>
                            <h3 className={'cases-demonstration__title'}>
                                MyHub
                            </h3>
                            <span className={'cases-demonstration__description '}>
                                MyHub — это новый формат поиска
                                специалистов под любую задачу, которых сервис подбирает для вас на основе проверки, отзывов и рейтинга.
                            </span>

                            <ul className={'cases-list'}>
                                <li className={'cases-list__item '}>
                                    <img className={'cases-list__img'} src={caseImg5} alt={'caseImg5'}/>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>1.</span>
                                        <Link className={'link link--black'} to={'/design-concept'}>
                                            <span>Дизайн-</span>
                                            <span>Концепция</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className={'cases-list__item '}>
                                    <img className={'cases-list__img'} src={caseImg6} alt={'caseImg6'}/>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>2.</span>
                                        <span>Нативная </span>
                                        <span style={{display:'block', marginTop:'3px'}}>разработка</span>
                                    </div>
                                </li>
                                <li className={'cases-list__item '}>
                                    <img className={'cases-list__img'} src={caseImg6} alt={'caseImg6'}/>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>2.</span>
                                        <span>Бренд-</span>
                                        <span style={{display:'block', marginTop:'3px'}}>платформа</span>
                                    </div>
                                </li>
                                <li className={'cases-list__item '}>
                                    <img className={'cases-list__img'} src={caseImg6} alt={'caseImg6'}/>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>2.</span>
                                        <span>Промо</span>
                                        <span style={{display:'block', marginTop:'3px'}}>сайт</span>
                                    </div>
                                </li>
                                <li className={'cases-list__item '}>
                                    <img className={'cases-list__img'} src={caseImg6} alt={'caseImg6'}/>
                                    <div className={'cases-list__link-wrp'}>
                                        <span className={'cases-list__mark'}>2.</span>
                                        <span style={{marginTop:'3px'}}>HR </span>
                                        <span style={{display:'block', marginTop:'3px'}}>сайт</span>
                                    </div>
                                </li>
                            </ul>

                            <div className={'cases-demonstration__bottom-img-box'}>
                                <img src={servImg2} alt={'1'}/>
                                <img src={servImg4} alt={'1'}/>
                                <img src={servImg3} alt={'1'}/>
                                <img src={servImg1} alt={'1'}/>
                            </div>
                        </div>
                    </section>

                    <div className={'cases__text'}>
                        <span>
                            Бóльшая часть крупных проектов под NDA, мы согласились не разглашать детали проделанных работ.
                        </span>
                    </div>
                    <div className={'cases__text'}>
                        <span>Остальная часть работ</span>
                        <Link className={'link link--size-22px'} to={''}>
                            <span>по запросу</span>
                        </Link>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Cases;
