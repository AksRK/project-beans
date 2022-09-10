import './ModalWindow.scss'
import {useState} from "react";

function ModalWindow({view}) {
    const [paymentTerm, setPaymentTerm] = useState(false)
    const [describeProject, setDescribeProject] = useState('')
    const [yourSuccess, setYourSuccess] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('')
    const [planningScheduleLater, setPlanningScheduleLater] = useState(false)
    const [selectTimeMenu, setSelectTimeMenu] = useState(false)


    if (view === true) {
        const backdrop = document.querySelector('.modal-window-backdrop')
        const modal = document.querySelector('.modal-window')
        const page = document.querySelector('.page')

        backdrop.classList.add('modal-window-backdrop--visible')
        modal.classList.add('modal-window--visible')
        page.classList.add('page--no-scroll')
    }

    function closeModal() {
        const backdrop = document.querySelector('.modal-window-backdrop')
        const modal = document.querySelector('.modal-window')
        const page = document.querySelector('.page')

        page.classList.remove('page--no-scroll')
        backdrop.classList.remove('modal-window-backdrop--visible')
        modal.classList.remove('modal-window--visible')
    }


    const priceList = [
        {
            id: 1,
            title: 'Time & Material',
            price: 'От 1 800 ₽/час',
            text:[
                'Начинаем, когда полностью понимаем задачу и имеем все исходные материалы.',
                'Подходит, если объем загрузки подвижен в течение месяца. Команда формируется в зависимости от задачи.'
            ]
        },
        {
            id: 2,
            title: 'Retainer',
            price: 'От 300 000 ₽/месяц',
            text:[
                'Оплата за команду.',
                'Команда, которая выделяется под проект и не загружается другими задачами.' +
                ' Подходит при стабильной загрузке. Регулярный платеж раз в месяц.'
            ]
        },
        {
            id: 3,
            title: 'Быстрый запуск',
            price: '70 000 ₽',
            text:[
                'Используем webflow, tilda, readymag, чтобы быстро запустить ваш первый продукт — сайт.',
                'Это решение дает возможность быстро тестировать различные гипотезы и обладать высокой ' +
                'скоростью изменений.'
            ]
        },
    ]
    const [priceItemSelected, setPriceItemSelected] = useState(priceList[0])

    const handleClickPaymentVariant = (id) => {
        setPriceItemSelected(id)
    }

    const selectDaysList = [
        {id:1, title: 'Пн'},
        {id:2, title: 'Вт'},
        {id:3, title: 'Ср'},
        {id:4, title: 'Чт'},
        {id:5, title: 'Пт'},
    ]

    const [discussionDay, setDiscussionDay] = useState('Не выбрано')

    const [selectedTime, setSelectedTime] = useState('14:00')

    const timeList = [
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
    ]


    function viewInfo() {
        console.log(
            `Описание проект ${describeProject}`
        )
        console.log(
            `Успех проекта ${yourSuccess}`
        )
        console.log(
            `Тарифный план ${priceItemSelected.title + '' + priceItemSelected.price} `
        )

        console.log(
            `Обсудить условия оплаты позже ${paymentTerm ? 'Да':'Нет'}`
        )

        console.log(
            `Имя ${customerName}`
        )
        console.log(
            `Номер ${customerPhoneNumber}`
        )
    }

    const [popUpPlanningScheduleView, setPopUpPlanningScheduleView] = useState(false)

    function popUpPlanningSchedule() {

        return (
            <>
                <div onClick={()=> setPopUpPlanningScheduleView(false)}
                     className={'planning-schedule-backdrop' +
                         (popUpPlanningScheduleView ?
                             ' planning-schedule-backdrop--visible':'')}></div>
                <div className={'planning-schedule' +
                        (popUpPlanningScheduleView ?
                            ' planning-schedule--visible':'')}>
                    <button onClick={()=> setPopUpPlanningScheduleView(false)}
                            className={'btn-close'}>
                    </button>
                    <div className={'planning-schedule__body'}>
                        <h3 className={'modal-title'}>
                            Расписание
                            по планированию
                        </h3>
                        <div className={'planning-schedule__item'}>
                            <h4 className={'planning-schedule__title'}>
                                «Рыбный» день
                            </h4>
                            <span>
                                Вместо непредсказуемо назначаемых презентаций устаканиваем регулярный день показа вам.
                                Показываем в рыбный день то, что сделали за неделю. И планируем.
                            </span>
                        </div>
                        <div className={'planning-schedule__item'}>
                            <label className={'planning-schedule__label'}>
                                В какой день недели?
                            </label>
                            <div className={'select-day'}>
                                {
                                    selectDaysList.map((day)=> {
                                        return (
                                            <div key={day.id} className={'select-day__item'}>
                                                <span className={'select-day__title'}>
                                                    {day.title}
                                                </span>
                                                <div
                                                    className={'checkbox' + (
                                                        discussionDay.id === day.id?
                                                            ' checkbox--checked':
                                                            ' checkbox--unchecked-black'
                                                    )}
                                                    onClick={()=> setDiscussionDay(day)}
                                                ></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div onClick={()=> setSelectTimeMenu(!selectTimeMenu)} className={'select-time'}>
                            <span>{selectedTime}</span>
                            <span className={'select-time__mark' +
                                (selectTimeMenu? ' select-time__mark--active': '')}></span>
                            <div className={'select-time__list' + (selectTimeMenu? ' select-time__list--active': '')}>
                                {
                                    timeList.map((time)=> {
                                        return (
                                            <span key={timeList.indexOf(time)}
                                                  onClick={()=> setSelectedTime(time)}>
                                                {time}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={'planning-schedule__checkbox-wrp'}>
                            <label className={'planning-schedule__label'}>
                                Если хотите обсудить этот вопрос позже:
                            </label>
                            <div className={'checkbox-btn' + (planningScheduleLater ? ' checkbox-btn--checked':'')}
                                 onClick={()=> setPlanningScheduleLater(!planningScheduleLater)}>
                                    <span className={'checkbox-btn__mark' +
                                        (planningScheduleLater ? ' checkbox-btn__mark--checked':'')}>
                                    </span>
                            </div>
                        </div>
                        <div className={'planning-schedule__item'}>
                            <button className={'button button--max-widht'}
                                    onClick={()=> setPopUpPlanningScheduleView(false)}
                            >
                                Далее
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div onClick={closeModal} className={'modal-window-backdrop'}></div>
            <div className={'modal-window'}>
                <div onClick={closeModal} className={'btn-close'}></div>
                <div className={'modal-window__head'}>Заявка на обсуждение проекта</div>
                <div className={'modal-window__body'}>
                    {popUpPlanningSchedule()}
                    <h2 className={'modal-title'}>
                        Наша команда готова стартовать ваш проект в ближайший понедельник
                    </h2>
                    <form className={'modal-window-form'}>
                        <div className={'modal-window-form__control'}>
                            <label className={'modal-window-form__label'} htmlFor={'describe-project'}>Опишите свой проект</label>
                            <textarea className={'modal-window-form__input'}
                                      name={'describe-project'}
                                      placeholder={'Например, что за проект, почему вы хотите ' +
                                          'его запустить, каким вы его видите...'}
                                      style={{height:'161px'}}
                                      value={describeProject}
                                      onChange={event => setDescribeProject(event.target.value)}

                            />
                        </div>
                        <div className={'modal-window-form__control'}>
                            <label className={'modal-window-form__label'}
                                   htmlFor={'your-success'}>
                                Что будет являться успехом
                            </label>
                            <textarea className={'modal-window-form__input'}
                                      name={'your-success'}
                                      placeholder={'Обозначьте в цифрах, фактах или ощущениях, что будет \n' +
                                          'являться успехом после запуска проекта'}
                                      style={{height:'81px'}}
                                      onChange={event => setYourSuccess(event.target.value)}
                            />
                        </div>

                        <div className={'modal-window-form__control'}>
                            <label className={'modal-window-form__label'}>
                                Расписание по планированию
                            </label>
                            <div className={'modal-window-form__timetable-box'}>
                                <span>
                                    Распределяем свою работу таким образом, чтоб каждую неделю
                                    выходить с результатом. Вы можете настроить расписание, когда
                                    вам будет удобнее обсуждать прогресс и планы.
                                </span>
                                <div onClick={()=> setPopUpPlanningScheduleView(true)}
                                     className={'button button--small-black'}>
                                    Настроить расписание
                                </div>
                            </div>
                        </div>

                        <div className={'modal-window-form__control'}>
                            <label className={'modal-window-form__label modal-window-form__label--big'}
                                   htmlFor={'customer-name'}>
                                Выберите удобное условие оплаты:
                            </label>

                            <ul className={'radio-menu-payment'}>
                                {
                                    priceList.map((item) => {
                                        return (
                                            <li key={item.id} className={'radio-menu-payment__item' +
                                                (priceItemSelected.id === item.id ? ' radio-menu-payment__item--selected':'')}>
                                                <div className={'radio-menu-payment__choice'}>
                                                    <div className={'checkbox' +
                                                        (priceItemSelected.id === item.id ?
                                                            ' checkbox--checked' :
                                                            ' checkbox--unchecked-black')}
                                                         onClick={()=> handleClickPaymentVariant(item)}></div>
                                                    <span>Выбрать</span>
                                                </div>
                                                <h5 className={'radio-menu-payment__title'}>
                                                    {item.title}
                                                </h5>
                                                <div className={'radio-menu-payment__price'}>
                                                    {item.price}
                                                </div>
                                                <div className={'radio-menu-payment__description'}>
                                                    {
                                                        item.text.map((text) => {
                                                            return <span key={item.text.indexOf(text)}>{text}</span>
                                                        })
                                                    }
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className={'modal-window-form__checkbox-wrp'}>
                                <label className={'modal-window-form__label modal-window-form__label--small'}>
                                    Обсудить условия оплаты позже:
                                </label>
                                <div className={'checkbox-btn' + (paymentTerm ? ' checkbox-btn--checked':'')}
                                     onClick={()=> setPaymentTerm(!paymentTerm)}>
                                    <span className={'checkbox-btn__mark' +
                                        (paymentTerm ? ' checkbox-btn__mark--checked':'')}>
                                    </span>
                                </div>

                            </div>

                        </div>


                        <div className={'modal-window-form__control'}>
                            <label className={'modal-window-form__label modal-window-form__label--big'}
                                   htmlFor={'customer-name'}>
                                Как вас зовут
                            </label>
                            <input className={'modal-window-form__input'}
                                   name={'customer-name'}
                                   placeholder={'Введите свое имя...'}
                                   onChange={event => setCustomerName(event.target.value)}
                            />
                        </div>

                        <div className={'modal-window-form__control'}>
                            <label className={'modal-window-form__label modal-window-form__label--big'}
                                   htmlFor={'customer-phone-number'}>
                                Ваш номер
                            </label>
                            <input className={'modal-window-form__input'}
                                   name={'customer-phone-number'}
                                   placeholder={'Введите свой номер...'}
                                   onChange={event => setCustomerPhoneNumber(event.target.value)}
                            />
                        </div>
                        <div className={'modal-window-form__control'}>
                            <div onClick={viewInfo} className={'button'}>Отправить заявку</div>
                            <span style={{maxWidth:'250px'}}>
                                В течение часа мы позвоним
                                вам, чтобы обсудить детали
                            </span>
                        </div>


                    </form>
                </div>

            </div>
        </>

    )


}

export default ModalWindow;