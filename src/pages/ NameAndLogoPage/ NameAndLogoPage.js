import './ NameAndLogoPage.scss'
import Logo from "../../components/UI/Logo/Logo";
import nameAndLogoBannerImg from '../../assets/images/name-and-logo/name-and-logo-banner-img.svg'
import nameAndLogoDemoLogo from '../../assets/images/name-and-logo/name-and-logo-demo-logo-img.svg'
import canceledLogo1 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-1.svg'
import canceledLogo2 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-2.svg'
import canceledLogo3 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-3.svg'
import canceledLogo4 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-4.svg'
import canceledLogo5 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-5.svg'
import canceledLogo6 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-6.svg'
import canceledLogo7 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-7.svg'
import canceledLogo8 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-8.svg'
import canceledLogo9 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-9.svg'
import canceledLogo10 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-10.svg'
import canceledLogo11 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-11.svg'
import canceledLogo12 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-12.svg'
import canceledLogo13 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-13.svg'
import canceledLogo14 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-14.svg'
import canceledLogo15 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-15.svg'
import canceledLogo16 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-16.svg'
import canceledLogo17 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-17.svg'
import canceledLogo18 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-18.svg'

import canceledLogo21 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-21.svg'
import canceledLogo22 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-22.svg'
import canceledLogo23 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-23.svg'
import canceledLogo24 from '../../assets/images/name-and-logo/name-and-logo-in-the-trash-24.svg'



function NameAndLogoPage() {

    const canceledList1 = [
        {id:1, url:canceledLogo1}, {id:2, url:canceledLogo2}, {id:3, url:canceledLogo3},
        {id:4, url:canceledLogo4}, {id:5, url:canceledLogo5}, {id:6, url:canceledLogo6},
        {id:7, url:canceledLogo7}, {id:8, url:canceledLogo8}, {id:9, url:canceledLogo9},
        {id:10, url:canceledLogo10}, {id:11, url:canceledLogo11}, {id:12, url:canceledLogo12},
        {id:13, url:canceledLogo13}, {id:14, url:canceledLogo14}, {id:15, url:canceledLogo15},
        {id:16, url:canceledLogo16}, {id:17, url:canceledLogo17}, {id:18, url:canceledLogo18},
    ]

    const canceledList2 = [
        {id:21, url:canceledLogo21}, {id:22, url:canceledLogo22}, {id:23, url:canceledLogo23},
        {id:24, url:canceledLogo24},
    ]

    return (
        <div className={'page'}>
            <section className={'page__item'}>
                <Logo/>

                <section className={'name-and-logo'}>
                    <section className={'page__banner'}>
                        <h2 className={'page-title'}>Нейминг и логотип</h2>
                        <div className={'name-and-logo__banner-img-wrp'}>
                            <img src={nameAndLogoBannerImg} alt={nameAndLogoBannerImg}/>
                        </div>
                        <span className={'page-description page-description--width-850px'}>
                            Нас позвали создать онлайн-школу и подготовить ее к привлечению учеников.
                            Мы предлагали разные варианты названия. И был принят одиз из них —
                        </span>
                    </section>
                    <section className={'smet-lab-demo'}>
                        <div className={'smet-lab-demo__item'}>
                            <h3 className={'smet-lab-demo__title'}>
                                Сметная лаборатория
                            </h3>
                        </div>

                        <div className={'smet-lab-demo__item'}>
                            <h4 className={'name-and-logo__sub-title'}>
                                Логотип.
                            </h4>
                            <div className={'demo-logo-box'}>
                                <div className={'demo-logo-box__item'}>
                                    <img src={nameAndLogoDemoLogo} alt={'nameAndLogoDemoLogo'}/>
                                    <span className={'demo-logo-box__logo-text'}>
                                    Сметная лаборатория
                                </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={'logo-in-the-trash'}>
                        <div className={'logo-in-the-trash__item'}>
                            <h4 className={'name-and-logo__sub-title'}>
                                То, что в ведре:
                            </h4>
                        </div>
                        <div className={'logo-in-the-trash__item logo-in-the-trash__item--trash-box'}>
                            <ul className={'canceled-logo-list'}>
                                {
                                    canceledList1.map((el) => {
                                        return (
                                            <li key={el.id} className={'canceled-logo-list__item'}>
                                                <span className={'canceled-logo-list__mark'}>
                                                    {el.id}
                                                </span>
                                                <img src={el.url} alt={el.id}/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className={'canceled-logo-list'}>
                                {
                                    canceledList2.map((el) => {
                                        return (
                                            <li key={el.id} className={'canceled-logo-list__item'}>
                                                <span className={'canceled-logo-list__mark'}>
                                                    {el.id}
                                                </span>
                                                <img src={el.url} alt={el.id}/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>

                </section>
            </section>
            <section style={{minHeight:'200px'}} className={'page__item page__item--black'}></section>
        </div>
    )
}

export default NameAndLogoPage;
