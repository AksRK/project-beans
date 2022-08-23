import ourImg from "../../assets/images/handwritte/our.svg";
import './HowWeWork.scss'
import {useState} from "react";

function HowWeWork() {
    const [choice, setChoice] = useState(true)

    function ourMethod() {
        setChoice(true)
    }
    function others() {
        setChoice(false)
    }

    function addClassLi() {
        if (choice) {
            return 'work-method-list__item'
        }else {
            return 'work-method-list__item work-method-list__item--others'
        }
    }

    return (
        <section className={'how-we-work'}>
            <h4 className={'section-title'}>как работаем ⋅</h4>

            <div className={'how-we-work-content'}>
                <div className={'how-we-work-content__item'}>
                    <button onClick={ourMethod} className={choice ? 'how-we-work-content__btn': 'how-we-work-content__btn how-we-work-content__btn--active' }>
                        <img src={ourImg} alt={'Наш'}/>
                        метод
                    </button>
                    <button onClick={others}
                            className={choice ? 'how-we-work-content__btn how-we-work-content__btn--secondary' : 'how-we-work-content__btn how-we-work-content__btn--secondary-active'}>
                        у других
                    </button>
                </div>
                <div className={'how-we-work-content__item'}>
                    <ul className={'work-method-list'}>
                        <li className={addClassLi()}>
                            <span>
                                ⋅ Знакомимся, <span className={!choice ? 'text-crossed-out-red': ''}>погружаемся в вашу
                                задачу, определяем «главное» и
                                составляем бэклог      для запуска,
                                поделим проект на спринты.</span>
                            </span>
                            <span className={'text-red' + (choice ? ' text-red--invisible' : '')}>
                                Получаем тз и начинаем оценивать стоимость.
                            </span>
                        </li>
                        <li className={addClassLi()}>
                            <span>
                                ⋅ Предоставим минимальную
                                команду и поставим ей задачу
                                {
                                    !choice ? <span className={'text-red'}>?</span> : '.'
                                }
                            </span>
                            <span>
                                ⋅ Определим минимальный бюджет
                                {
                                    !choice ? <span className={'text-red'}>?</span> : '.'
                                }
                            </span>

                            <span className={'text-red' + (choice ? ' text-red--invisible' : '')}>
                                    Нет, мы составим план максимум, чтоб заработать как можно больше. ¯\_(ツ)_/¯
                            </span>
                        </li>
                        <li className={addClassLi()}>
                            <span>⋅ Превратим ваш проект в МВП.</span>
                            <span className={'text-red' + (choice ? ' text-red--invisible' : '')}>
                                Проект раздувается и становится неуправляемым
                            </span>
                        </li>
                        <li className={addClassLi()}>
                            <span>
                            ⋅ Проверяем гипотезы, после чего
                            улучшаем и развиваем работающую
                            систему.
                            </span>
                            <span className={'text-red' + (choice ? ' text-red--invisible' : '')}>
                                КАК?? Хаааааааоооооооос!!!
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default HowWeWork;