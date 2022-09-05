import ourImg from '../../assets/images/handwritte/our.svg'
import './OurApprouch.scss'
import {useEffect, useState} from "react";
import Table from "../UI/Table/Table";
import List from "../UI/List/List";
import TableGraphical from "../UI/TableGraphic/TableGraphical";
import PopUp from "../UI/PopUp/PopUp";

function OurApprouch() {
    const [radioId, setRadioId] = useState(0)
    const [sprint, setSprint] = useState(true)
    const radioMarginLeft = 111
    const [designListCheckbox, setDesignListCheckbox] = useState({1: true, 2:true, 3:true})
    const [designListCheckboxCurrent, setDesignListCheckboxCurrent] = useState(0)
    const [startAnimationDesignList, setStartAnimationDesignList] = useState(false)
    const [clickBotUsedCount, setClickBotUsedCount] = useState(0)
    const [designProcessListItemId, setDesignProcessListItemId] = useState(1)
    const mobVersion = 479


    let radioMenuValue = [
        {id:0, value:'1 Неделя'},
        {id:1, value:'2 Неделя'},
        {id:2, value:'3 Неделя'},
    ]

    let listWork = [
        {id:1, value:[
                'Поиск стилитистических референсов',
                'Обратная связь',
                'Создание первых вариантов дизайн концепции'
            ]},
        {id:2, value:[
                'ОС по дизайн-концепции',
                'Доработки',
                'Создание базовых и дополнительных элементов'
            ]},
        {id:3, value:[
                'Создание финальной версии концепта',
                'Презентация и ОС',
                'Подготовка макетов и технического задания для разработчиков'
            ]},

    ]

    let tableWork = [
        {id:1, value:[
                ['T&M', 'Ставка', 'Часы'],
                ['Ведущий дизайнер', '1300', '20'],
                ['Middle дизайнер', '900', '30']
            ]
        },
        {id:2, value:[
                ['T&M', 'Ставка', 'Часы'],
                ['Ведущий дизайнер', '1300', '20'],
                ['Middle дизайнер', '900', '30'],
                ['Райтер', '600', '20']
            ]
        },
        {id:3, value:[
                ['T&M', 'Ставка', 'Часы'],
                ['Ведущий дизайнер', '1300', '18'],
                ['Middle дизайнер', '900', '29'],
                ['Разработчик', '900', '29']
            ]
        },
        {id:3, value:[
                ['1 неделя', '2 неделя', '3 неделя'],
                [<div className={'decor-line decor-line--grey'} style={{width:'71px'}}></div>, <div></div>, <div></div>],
                [<div className={'decor-line decor-line--grey'} style={{width:'99px'}}></div>, <div></div>, <div></div>],
                [<div></div>, <div className={'decor-line decor-line--dark-grey'} style={{width:'137px'}}></div>, <div></div>],
                [<div></div>, <div className={'decor-line decor-line--dark-grey'} style={{width:'53px'}}></div>, <div></div>],
                [<div></div>, <div className={'decor-line decor-line--blue'} style={{width:'140px', left:'35%'}}></div>, <div></div>],
                [<div></div>, <div></div>, <div className={'decor-line decor-line--blue'} style={{width:'90px'}}></div>],
            ]
        }
    ]

    function styleRadioPlate() {
        const margin = radioId * radioMarginLeft
        if (radioId === 0) {
            return '3px'
        }else if (radioId === 1) {
            return radioMarginLeft + 'px'
        }else {
            return margin - 3 + 'px'
        }
    }

    function styleRadioLine() {
        if (radioId === 0) {
            return {left: '216.5px'}
        }else if (radioId === radioMenuValue.indexOf(radioMenuValue.at(-1))) {
            return {left: '108.5px'}
        }else {
            return {opacity: '0'}
        }
    }

    const designList = [
        {id:1 , title:'Паспорт проекта',
            value: 'Стартуем с документа, закрепляя цели и смысл задачи, ' +
                   'чтоб не потерять суть в процессе работы.'},
        {id:2 , title:'Пользовательские сценарии',
            value: 'Оптимизируем и структурируем пользовательский путь в блок-схемы.'},
        {id:3 , title:'Прототипирование',
            value: 'Проектируем всю вложенность проекта, начиная с MVP версии, с планом ее развития.'},

    ]

    const designProcessList = [
        {id: 1,
        title: 'Проблема',
        value: 'Погружение в задачу, анализ конкурентов, ' +
               'исследование пользователей и их потребностей, ' +
               'продуктовый план, постановка проблем.'},
        {id: 2,
            title: 'Решение',
            value: 'JTBD, CJM, скетчи, построение гипотез, их описание, опрос, оценка отношения к идеям.'},
        {id: 3,
            title: 'Реализация',
            value: `Прототип, дизайн-макеты, юзабилити- тестирование, дизайн-критика, отчет.`},
        {id: 4,
            title: 'Запуск первой версии',
            value: 'Выкатка на рынок и тестирование, оценка и обновленная CJM.'},
        {id: 5,
            title: 'Цикл',
            value: 'После теста МВП — первой работающей версии — расширяем функциональность продукта.'},
    ]

    useEffect(() => {
        if (startAnimationDesignList) {
            setTimeout(() => {
                setStartAnimationDesignList(false)
                setDesignListCheckbox({...designListCheckbox, [designListCheckboxCurrent]:true})
            }, 2000)
        }
    }, [designListCheckboxCurrent])

    function startBot(id) {
        if (!startAnimationDesignList) {
            setDesignListCheckbox({...designListCheckbox, [id]:false})
            setDesignListCheckboxCurrent(id)
            setStartAnimationDesignList(true)
            if (clickBotUsedCount <= 10) {
                setClickBotUsedCount(clickBotUsedCount + 1)
            }else {
                setClickBotUsedCount(0)
            }
        }
    }

    return (
        <section className={'our-approuch'}>
            <div className={'section-title'}>
                <img src={ourImg} alt="Наш"/>
                <span>подход</span>
                <span>к вашей задаче</span>
            </div>

            <section className={'method-info-box method-info-box--margin-top'}>
                <div className={'method-info-box__item'}>
                    <h4 className={'method-info-box__title'}>
                        Планирование
                    </h4>
                    <div className={'method-info-box__text'}>
                        Составим план для запуска,
                        поделим проект на спринты, предоставим личный кабинет
                        с прозрачными расчетами работы и для наблюдения процесса.
                    </div>
                    {
                        window.screen.width <= mobVersion ?
                            ''
                            :<div className={'method-info-box__text method-info-box__text--abslt-bottom'}>01</div>
                    }

                </div>
                <div className={'method-info-box__item'}>
                    <div className={'method-info-box__text method-info-box__text--small'}>
                        <span>Пример </span>
                        <span onClick={() => setSprint(true)}
                              className={sprint ? '' : 'link link--blue-dtd'}>спринтов </span>
                        <span>и </span>
                        <span onClick={() => setSprint(false)}
                              className={!sprint ? '' : 'link link--blue-dtd'}>ганта</span>
                    </div>

                    <div className={'tabs-panel'}>
                        {
                            sprint ?
                                <>
                                    <ul className={'radio-menu'}>
                                        <div className={'radio-menu__line'} style={styleRadioLine()}></div>
                                        <div className={'radio-menu__plate'} style={{left: styleRadioPlate()}}></div>
                                        {
                                            radioMenuValue.map((element) => {

                                                return (
                                                    <li onClick={() => {setRadioId(element.id)}}
                                                        key={element.id}
                                                        className={'radio-menu__item' + (radioId === element.id ?
                                                                   ' radio-menu__item--active' : '')}>
                                                        <span>{element.value}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                    <h5 className={'tabs-panel__title'}>
                                        Задача — концепт сайта
                                    </h5>
                                    <List list={listWork[radioId]}/>
                                    <div className={'line'}></div>
                                    <Table table={tableWork[radioId]}/>
                                </>
                                :
                                <>
                                    <TableGraphical table={tableWork[3]}/>
                                    <span>Потрачено 14 дней</span>

                                    <span className={'tabs-panel__text tabs-panel__text--margin-40px'}>
                                        Показываем, какие этапы работы и когда
                                        планируем их завершить и запустить проект.
                                    </span>
                                </>
                        }
                    </div>
                </div>
            </section>

            <section className={'method-info-box method-info-box--margin-top method-info-box--dark'}>
                <div className={'method-info-box__item'}>
                    <h4 className={'method-info-box__title method-info-box__title--white'}>
                        Проектирование
                    </h4>
                    <div className={'method-info-box__text'}>
                        Распутаем сложные функции и пользовательские сценарии,
                        а после уложим все в понятный интерфейс
                    </div>
                    {
                        window.screen.width <= mobVersion ?
                            ''
                            : <div className={'method-info-box__text method-info-box__text--abslt-bottom'}>02</div>
                    }
                </div>

                <div className={'method-info-box__item  method-info-box__item--padding-top-20px'}>
                    <div className={'tabs-panel tabs-panel--no-background tabs-panel--no-padding'}>

                        <ul className={'design-list'}>
                            {
                                designList.map((item) => {
                                    return (
                                        <li key={item.id} className={'design-list__item'}>
                                            <div onClick={()=> startBot(item.id)}
                                                 className={'design-list__checkbox' + (designListCheckbox[item.id] ?
                                                     ' design-list__checkbox--checked' :
                                                     ' design-list__checkbox--unchecked' ) }>
                                                {
                                                    startAnimationDesignList && designListCheckboxCurrent === item.id ?
                                                        <div className={'design-list__click-bot'}>
                                                            {clickBotUsedCount <= 2 ?
                                                                '￢(・_・;)':
                                                                clickBotUsedCount <= 6 ?
                                                                    "￢( '～` ;)" :
                                                                    clickBotUsedCount <= 9 ?
                                                                        '￢(・・ ;)ゞ': '￢( ˘ ､ ˘ )'}
                                                        </div> : ''
                                                }
                                            </div>
                                            <div className={'design-list__text' + (!designListCheckbox[item.id] ?
                                                ' design-list__text--transparent' : '')}>
                                                <div className={'design-list__title'}>
                                                    {item.title}
                                                </div>
                                                {item.value}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className={'method-info-box method-info-box--margin-top method-info-box--blue'}>
                <div className={'method-info-box__item'}>
                    <h4 className={'method-info-box__title method-info-box__title--white'}>
                        Дизайн-процесс
                    </h4>
                    <div className={'method-info-box__text method-info-box__text--white'}>
                        Наш подход основан на использовании дизайн-концепции,
                        которая увеличит ценность продукта для клиента и сократит ваши издержки
                        <PopUp
                            mark={'4'}
                            styleMark={'white'}
                            text={'//р-Продукт — это не то, что просит клиент, а то, что нужно его бизнесу. Даже если он ещё ' +
                                'пока об этом не подозревает. Даже если он встретит продукт в штыки. Даже если он видит ' +
                                'всё совсем по-другому.'}
                            windowPosition={{bottom:'-240px'}}
                            markPosition={{top:'-10px'}}
                        />
                        на запуск.
                    </div>
                    {
                        window.screen.width <= mobVersion ?
                            ''
                            : <div className={
                                'method-info-box__text ' +
                                'method-info-box__text--abslt-bottom ' +
                                'method-info-box__text--white'}>
                                03
                            </div>
                    }
                </div>
                <div className={'method-info-box__item  method-info-box__item--padding-top-20px'}>
                    <div className={'tabs-panel tabs-panel--lght-silver tabs-panel--padding-8px'}>
                        <ul className={'design-process-list'}>
                            {
                                designProcessList.map((item) => {
                                    return (
                                        <li onClick={() => setDesignProcessListItemId(item.id)}
                                            key={item.id}
                                            className={'design-process-list__item' +
                                                (designProcessListItemId === item.id ? ' design-process-list__item--active': '')}>
                                            <div className={'design-process-list__title' +
                                                (designProcessListItemId === item.id ? ' design-process-list__title--underline':'')}>
                                                <span className={'design-process-list__mark' +
                                                    (designProcessListItemId === item.id ? ' design-process-list__mark--dark':'')}>{item.id}</span>
                                                <span>{item.title}</span>
                                            </div>
                                            <span className={'design-process-list__text'}>
                                                {item.value}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default OurApprouch;