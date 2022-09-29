import './HowWeWork.scss'
import {useState} from "react";
import PopUp from "../UI/PopUp/PopUp";

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
            <h4 className={'section-title'}>
                {/*<img src={ourImg} alt={'Наш'}/>*/}
                <span className={'beans-style beans-style--section-title'}>
                    наш
                </span>
                метод ⋅
            </h4>

            <div className={'how-we-work-content'}>
                <div className={'how-we-work-content__item'}>
                    <button onClick={ourMethod} className={'how-we-work-content__btn' + (choice ? ' how-we-work-content__btn--active':'') }>
                        как мы работаем
                    </button>
                    <button onClick={others}
                            className={'how-we-work-content__btn how-we-work-content__btn--secondary' + (!choice ?' how-we-work-content__btn--secondary-active':'')}>
                        другие
                    </button>
                </div>
                <div className={'how-we-work-content__item'}>
                    <ul className={'work-method-list'}>
                        <li className={addClassLi()}>
                            <span>
                                <span className={'work-method-list__dot'}></span>
                                Знакомимся, <span className={!choice ? 'text-crossed-out-red': ''}>погружаемся в вашу
                                задачу, определяем «главное» и
                                составляем бэклог
                                <PopUp
                                    mark={'2'}
                                    text={'Бэклог — это список задач со степенями ' +
                                        'приоритетности, необходимые для запуска ' +
                                        'продукта.'}
                                    windowPosition={{left:'260px', bottom:'-100px'}}
                                    markPosition={{top:'-10px'}}
                                />
                                для запуска,
                                поделим проект на спринты.</span>
                            </span>
                            <span className={'text-red' + (choice ? ' text-red--invisible' : '')}>
                                Получаем тз и начинаем оценивать стоимость.
                            </span>
                        </li>
                        <li className={addClassLi()}>
                            <span>
                                <span className={'work-method-list__dot'}></span>
                                {'Предоставим минимальную \n команду и поставим ей задачу'}
                                <span className={'text' + (!choice ? ' text-red': '')}>{choice ? '.' : '?'}</span>
                            </span>
                            <span>
                                <span className={'work-method-list__dot'}></span>
                                {'Определим минимальный \n бюджет'}
                                {
                                    !choice ? <span className={'text-red'}>?</span> : '.'
                                }
                            </span>

                            <span className={'text-red' + (choice ? ' text-red--invisible' : '')}>
                                    Нет, мы составим план максимум, чтоб заработать как можно больше. ¯\_(ツ)_/¯
                            </span>
                        </li>
                        <li className={addClassLi()}>
                            <span>
                                <span className={'work-method-list__dot'}></span>
                                Превратим ваш проект в МВП.
                                <PopUp
                                    mark={'3'}
                                    text={'МВП — минимальный жизнеспособный продукт, это цикличный способ проверки, ' +
                                        'который заканчивается тогда, когда мы  «нащупали» задачу, которую люди хотят' +
                                        ' решить с помощью вашего продукта.'}
                                    windowPosition={{left:'140px', bottom:'-180px'}}
                                    markPosition={{top:'-10px'}}
                                />
                            </span>
                            <span className={'text-red' + (choice ? ' text-red--invisible' : '')}>
                                Проект раздувается и становится неуправляемым
                            </span>
                        </li>
                        <li className={addClassLi()}>
                            <span>
                                <span className={'work-method-list__dot'}></span>
                                Проверяем гипотезы, после чего
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
