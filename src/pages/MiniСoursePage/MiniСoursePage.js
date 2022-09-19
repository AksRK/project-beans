import './MiniСoursePage.scss'
import Logo from "../../components/UI/Logo/Logo";
import bannerImg from '../../assets/images/mini-course-pictures/mini-course-banner.svg'
import miniCourseVisual1 from '../../assets/images/mini-course-pictures/mini-course-visual-1.svg'
import miniCourseVisual2 from '../../assets/images/mini-course-pictures/mini-course-visual-2.svg'
import miniCourseVisual3 from '../../assets/images/mini-course-pictures/mini-course-visual-3.svg'
import miniCourseVisual4 from '../../assets/images/mini-course-pictures/mini-course-visual-4.svg'
import miniCourseVisual5 from '../../assets/images/mini-course-pictures/mini-course-visual-5.svg'
import miniCourseVisualMob5 from '../../assets/images/mini-course-pictures/mini-course-visual-5-mob.svg'

function MiniСoursePage() {
    const mobileVersion = 479

    return (
        <div className={'page'}>
            <section className={'page__item'}>
                <Logo/>

                <section className={'mini-course'}>
                    <section className={'page__banner'}>
                        <h2 className={'page-title'}>Мини-курс</h2>
                        <div className={'page-description page-description--width-850px'}>
                            <span>
                                Наш продукт — не только курсы. Для школы кроме знаний есть и другие
                                ценности: прозрачность, открытость и доверие.
                            </span>
                            <span>
                                И чтобы это проявить мы сделали мини-курс.
                            </span>
                        </div>
                        <div className={'mini-course__banner-img-wrp'}>
                            <img src={bannerImg} alt={'BannerImg'}/>
                        </div>
                    </section>

                    <div className={'mini-course__link-wrp'}>
                        <span>Мини-курс:</span>

                        <a className={'link-block'}
                           href={'https://figma.fun/xZxFYR'}
                           target={"_blank"}
                           rel={"nofollow noopener noreferrer"}>

                            <span>
                                https://www.notion.so/
                            </span>
                            <span>
                                beans-team/
                            </span>
                            <span>
                                b7d7253ffc7b49679b96c3
                            </span>
                            <span>
                                a08dc539f3
                            </span>
                        </a>
                    </div>

                    <section className={'mini-course-process'}>
                        <h3 className={'mini-course-process__section-title'}>
                            Процесс
                        </h3>
                        <ul className={'mini-course-process-list'}>
                            <li className={'mini-course-process-list__item'}>
                                <h4 className={'mini-course-process-list__title'}>
                                    1. Идея
                                </h4>
                                <div className={'mini-course-process-list__description'}>
                                    <span>
                                        Почему именно интерактивный учебник? Мы тестировали чек-листы,
                                        гайды, бесплатные пробные уроки. Эффективно, но недостаточно.
                                        Подумали: надо сделать то, что никто не делал подобное среди конкурентов.
                                </span>
                                </div>
                            </li>
                            <li className={'mini-course-process-list__item'}>
                                <h4 className={'mini-course-process-list__title'}>
                                    2. Структура и текст
                                </h4>
                                <div className={'mini-course-process-list__description'}>
                                    <span>
                                        Наша основная задача — избавить текст от канцелярита, упростить сложное,
                                        чтобы чтение было легким и понятным. Для этого мы использовали редакторские
                                        приемы.
                                    </span>
                                </div>
                            </li>
                            <li className={'mini-course-process-list__item'}>
                                <h4 className={'mini-course-process-list__title'}>
                                    3. Картинки
                                </h4>

                                <div className={'mini-course-process-list__description'}>
                                    <span>
                                        Тексты необходимо было сопроводить визуальными материалами.
                                    </span>
                                    <span>
                                        Результат:
                                    </span>
                                </div>
                            </li>
                            <li className={'mini-course-process-list__item'}>
                                <div className={'mini-course-process-list__img-wrp'}>
                                    <img src={miniCourseVisual1} alt={'miniCourseVisual1'}/>
                                    <img src={miniCourseVisual2} alt={'miniCourseVisual2'}/>
                                    <img src={miniCourseVisual3} alt={'miniCourseVisual3'}/>
                                    <img src={miniCourseVisual4} alt={'miniCourseVisual4'}/>
                                </div>
                            </li>
                            <li className={'mini-course-process-list__item'}>
                                <h4 className={'mini-course-process-list__title'}>
                                    4. На сайте
                                </h4>
                                <div className={'mini-course-process-list__description'}>
                                    <span>
                                        И добавили блок о мини-курсе на сайте:
                                    </span>
                                </div>
                            </li>
                            <li className={'mini-course-process-list__item'}>
                                <div className={'mini-course-process-list__img-wrp'}>
                                    {
                                        window.screen.width <= mobileVersion ?
                                            <img src={miniCourseVisualMob5} alt={'miniCourseVisualMob5'}/> :
                                            <img src={miniCourseVisual5} alt={'miniCourseVisual5'}/>
                                    }
                                </div>
                            </li>
                        </ul>
                    </section>

                </section>
            </section>
            <section style={{minHeight:'200px'}} className={'page__item page__item--black'}></section>
        </div>
    )
}

export default MiniСoursePage;
