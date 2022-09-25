import './WhoIsThere.scss'
import whoImg from "../../assets/images/handwritte/ru/who.svg";

function WhoIsThere() {

    return (
        <section className={'who-is-there'}>
            <h4 className={'who-is-there__title'}>
                {/*<img src={whoImg} alt={'Кто'}/>*/}
                <span className={'beans-style beans-style--section-title'}>
                    кто
                </span>
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
                    <a className={'link who-is-there__description--link'} href={"#id"}>
                        <span>компетенциями.</span>
                    </a>
                </span>
                <span>Можем начать, не имея всех материалов и ответов, импровизируем.</span>
                <span>
                    Мы обязательно превратим любой новый проект в «первую версию» — выкинем всё, что только
                    можно, оставим главное, и попробуем запустить это как можно скорее.
                </span>
            </div>
        </section>
    )
}

export default WhoIsThere;
