import Logo from "../../components/UI/Logo/Logo";
import './DesignConcept.scss'
import dsgPic1 from '../../assets/images/design-concept-pictures/design-concept-picture-1.svg'
import dsgPic2 from '../../assets/images/design-concept-pictures/design-concept-picture-2.svg'
import dsgPic3 from '../../assets/images/design-concept-pictures/design-concept-picture-3.svg'
import dsgPic4 from '../../assets/images/design-concept-pictures/design-concept-picture-4.svg'
import dsgPic5 from '../../assets/images/design-concept-pictures/design-concept-picture-5.svg'
import dsgPic6 from '../../assets/images/design-concept-pictures/design-concept-picture-6.svg'
import dsgPic7 from '../../assets/images/design-concept-pictures/design-concept-picture-7.svg'
import servImg1 from "../../assets/images/serv-cat/serv-cat-1.svg";
import servImg2 from "../../assets/images/serv-cat/serv-cat-2.svg";
import servImg3 from "../../assets/images/serv-cat/serv-cat-3.svg";
import servImg4 from "../../assets/images/serv-cat/serv-cat-4.svg";
import servImg5 from "../../assets/images/serv-cat/serv-cat-5.svg";
import servImg6 from "../../assets/images/serv-cat/serv-cat-6.svg";
import servImg7 from "../../assets/images/serv-cat/serv-cat-7.svg";
import servImg9 from "../../assets/images/serv-cat/serv-cat-9.svg";
import servImg8 from "../../assets/images/serv-cat/serv-cat-8.svg";
import servImg10 from "../../assets/images/serv-cat/serv-cat-10.svg";
import servImg11 from "../../assets/images/serv-cat/serv-cat-11.svg";
import servImg12 from "../../assets/images/serv-cat/serv-cat-12.svg";
import servImg13 from "../../assets/images/serv-cat/serv-cat-13.svg";


function DesignConcept() {

    const cardImgCatList = [
        {
            id:1, title:'Услуги для животных', imgSrc:servImg1, cardType:'small'
        },
        {
            id:2, title:'Ремонт техники', imgSrc:servImg2, cardType:'small'
        },
        {
            id:3, title:'Вскрытие замков', imgSrc:servImg3, cardType:'small'
        },
        {
            id:4, title:'Собеседник на час', imgSrc:servImg4, cardType:'small'
        },
        {
            id:5, title:'Мастера по ремонту, монтажу, замене и установки', imgSrc:servImg5, cardType:'big'
        },
        {
            id:6, title:'Уборка мусора', imgSrc:servImg6, cardType:'small'
        },
        {
            id:7, title:'Ментальное здоровье', imgSrc:servImg7, cardType:'small'
        },
        {
            id:9, title:'Спортивные тренеры', imgSrc:servImg9, cardType:'small'
        },
        {
            id:8, title:'Срочная помощь по учебе (школа/ВУЗ)', imgSrc:servImg8, cardType:'big'
        },

        {
            id:10, title:'Трезвый водитель', imgSrc:servImg10, cardType:'small'
        },
        {
            id:11, title:'Услуги красоты', imgSrc:servImg11, cardType:'small'
        },
        {
            id:12, title:'Клининг', imgSrc:servImg12, cardType:'small'
        },
        {
            id:13, title:'Фото/видео/аудио', imgSrc:servImg13, cardType:'small'
        },
    ]

    return (
        <div className={'page'}>
            <section className={'page__item'}>
                <Logo/>

                <section className={'design-concept'}>
                    <section className={'page__banner'}>
                        <h2 className={'page-title'}>{'Дизайн - концепция приложения\n MyHub'}</h2>
                        <span className={'page-description'}>
                                MyHub — это новый формат поиска специалистов под любую задачу,
                                которых сервис подбирает для вас на основе проверки, отзывов и рейтинга.
                            </span>
                    </section>

                    <section className={'pictures-works pictures-works--primary'}>
                        <div className={'pictures-works__item pictures-works__item--center-center'}>
                            <img src={dsgPic1} alt={'dsgPic1'}/>
                        </div>
                        <div className={'pictures-works__item pictures-works__item--just-cont-start'}>
                            <img src={dsgPic2} alt={'dsgPic2'}/>
                            <img src={dsgPic3} alt={'dsgPic3'}/>
                        </div>
                    </section>

                    <section className={'cat-img-demo'}>
                        <div className={'cat-img-demo__item'}>
                            <h5 style={{maxWidth:'370px'}} className={'design-concept__text'}>Придумали иллюстрации для категорий услуг:</h5>

                            <ul className={'card-demo-img'}>
                                {
                                    cardImgCatList.map((card)=> {

                                        return (
                                            <li key={card.id} className={'card-demo-img__item' +
                                                (card.cardType === 'big'? ' card-demo-img__item--big':'')}>
                                                <span className={'card-demo-img__title'}>{card.title}</span>
                                                <img src={card.imgSrc} alt={card.id}/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>

                    <div className={'design-concept__text'}>
                            <span>
                                Мы были вдохновлены идеей — сформировать концепцию так, будто пользователь приходит
                                к нам, как к знакомому/другу за рекомендацией специалиста.
                            </span>
                        <span>
                                Поэтому мы выбрали формат чат-бота.
                            </span>
                        <span>
                                И чтоб оживить автоматического помощника, мы добавили эмоджи. Например:
                                <span className={'design-concept__emj-list'}>
                                    <span>{'(• ‿¬)'}</span>
                                    <span>{'(¬ ‿¬)'}</span>
                                    <span>{'(ﾉ´ з `)ノ'}</span>
                                    <span>{'(>_<)'}</span>
                                </span>
                            </span>
                    </div>

                    <section className={'pictures-works pictures-works--secondary'}>

                        <div className={'pictures-works__item pictures-works__item--secondary'}>
                            <img src={dsgPic4} alt={'dsgPic4'}/>
                            <img src={dsgPic5} alt={'dsgPic5'}/>
                        </div>
                        <div className={'pictures-works__item ' +
                            'pictures-works__item--margin-top-500px ' +
                            'pictures-works__item--just-cont-start ' +
                            'pictures-works__item--secondary'}>
                            <img src={dsgPic6} alt={'dsgPic6'}/>
                            <img src={dsgPic7} alt={'dsgPic7'}/>
                        </div>
                    </section>

                    <section className={'example-work'}>
                        <div className={'example-work__item'}>
                                <span style={{maxWidth:'500px'}} className={'design-concept__text'}>
                                    Детально продумали и собрали более 100 пользовательских сценариев.
                                </span>
                        </div>
                        <div className={'example-work__item'}>
                            <span className={'design-concept__text'}>Посмотрите работу на онлайн-доске:</span>
                            <a className={'link-block'}
                               style={{maxWidth:'340px'}}
                               href={'https://figma.fun/1Twxvl'}
                               target={"_blank"}
                               rel={"nofollow noopener noreferrer"}>
                                <span>https://figma.fun/1Twxvl</span>
                            </a>

                            <span className={'design-concept__text'}>Roadmap исполнения заказа:</span>
                            <a className={'link-block'}
                               style={{maxWidth:'340px'}}
                               href={'https://figma.fun/xZxFYR'}
                               target={"_blank"}
                               rel={"nofollow noopener noreferrer"}>
                                <span>https://figma.fun/xZxFYR</span>
                            </a>
                        </div>

                    </section>
                </section>
            </section>
        </div>
    )
}

export default DesignConcept;
