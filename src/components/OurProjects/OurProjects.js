import './OurProjects.scss'
import weImg from "../../assets/images/handwritte/ru/we.svg";

function OurProjects() {

    const demoProjectList = [
        {
            title: 'Курс',
            tag:'Образование',
            text:'Этот курс о дизайн-мышлении и профессионализме. Он адресован опытным' +
                 ' дизайнерам и творческим ребятам.',
            usage:'Скоро!'
        },
        {
            title: 'Way',
            tag:'Сервис',
            text:'Сервис, в котором вы получаете дизайн-критику, исследуете пользовательские' +
                 ' пути в своих интерфейсах и собираете количетсвенные и качественные данные.',
            usage:'Скоро!'
        },
        {
            title: 'Кабинет',
            tag:'Сервис',
            text:'Личный кабинет для вас, где хранятся все данные — спринты, гант, процесс работы,' +
                 ' планирование. Все прозрачно.',
            usage:'Используется нашими клиентами!'
        },
    ]

    return (
        <section className={'our-projects'}>
            <div className={'section-title section-title--width-500'}>
                {/*<img src={weImg} alt="Мы"/>*/}
                <span className={'beans-style beans-style--section-title'}>
                    мы
                </span>
                <span> — продуктовая команда,</span>
                <span>и у нас есть собственные проекты</span>
            </div>

            <ul className={'demo-projects-list'}>
                {
                    demoProjectList.map((item) => {
                        return (
                            <li key={demoProjectList.indexOf(item)} className={'demo-projects-list__item'}>
                                <div className={'demo-projects-list__tag'}>
                                    {item.tag}
                                </div>
                                <h5 className={'demo-projects-list__title'}>
                                    {item.title}
                                </h5>
                                <span className={'demo-projects-list__text'}>
                                    {item.text}
                                </span>
                                <span className={'demo-projects-list__usage'}>
                                    {item.usage}
                                </span>
                            </li>
                        )
                    })
                }
                {/*<li className={'demo-projects-list__item'}>*/}
                {/*    <div className={'demo-projects-list__tag'}>*/}
                {/*        Образование*/}
                {/*    </div>*/}
                {/*    <h5 className={'demo-projects-list__title'}>*/}
                {/*        Курсы*/}
                {/*    </h5>*/}
                {/*    <span className={'demo-projects-list__text'}>*/}
                {/*        //р-Недостаточно делать хороший дизайн, мы задаем новое направление в развитие продукта.*/}
                {/*    </span>*/}
                {/*    <span className={'demo-projects-list__usage'}>*/}
                {/*        Скоро!*/}
                {/*    </span>*/}
                {/*</li>*/}
                {/*<li className={'demo-projects-list__item'}>*/}
                {/*    <div className={'demo-projects-list__tag'}>*/}
                {/*        Образование*/}
                {/*    </div>*/}
                {/*    <h5 className={'demo-projects-list__title'}>*/}
                {/*        Курсы*/}
                {/*    </h5>*/}
                {/*    <span className={'demo-projects-list__text'}>*/}
                {/*        //р-Недостаточно делать хороший дизайн, мы задаем новое направление в развитие продукта.*/}
                {/*    </span>*/}
                {/*    <span className={'demo-projects-list__usage'}>*/}
                {/*        Скоро!*/}
                {/*    </span>*/}
                {/*</li>*/}
            </ul>
        </section>
    )
}

export default OurProjects;
