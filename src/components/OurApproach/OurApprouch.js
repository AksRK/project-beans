import ourImg from '../../assets/images/handwritte/our.svg'
import './OurApprouch.scss'
import {useState} from "react";
import Table from "../UI/Table/Table";
import List from "../UI/List/List";
import TableGraphical from "../UI/TableGraphic/TableGraphical";

function OurApprouch() {
    const [radioId, setRadioId] = useState(0)
    const [sprint, setSprint] = useState(true)
    const radioPlateWidth = 110


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
        const margin = radioId * radioPlateWidth
        if (radioId === 0) {
            return '3px'
        }else {
            return margin+'px'
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
                    <div className={'method-info-box__text method-info-box__text--abslt-bottom'}>01</div>
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
                                        <div className={'radio-menu__plate'} style={{left: styleRadioPlate()}}></div>
                                        {
                                            radioMenuValue.map((element) => {

                                                return (
                                                    <li onClick={() => {setRadioId(element.id)}}
                                                        key={element.id}
                                                        // className={'radio-menu__item' + (radioId === element.id ? ' radio-menu__item--active' : '')}
                                                        className={'radio-menu__item'}
                                                    >
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
        </section>
    )
}

export default OurApprouch;