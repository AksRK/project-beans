import './Tst.scss'
import Navigation from "../../components/Navigation/Navigation";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import OurApprouch from "../../components/OurApproach/OurApprouch";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import WhoIsThere from "../../components/WhoIsThere/WhoIsThere";

function Tst () {

    return (
        <div className={'container'}>
            <div className={'page'}>
                <section className={'page__item'}>
                    <Header/>
                    <Banner/>
                    <WhoIsThere/>
                    <HowWeWork/>
                    <OurApprouch/>

                    <div id={'id'}></div>
                </section>
                <section className={'page__item page__item--black'}>
                    Заглушка...
                </section>
                <Navigation/>
            </div>
        </div>
    )
}

export default Tst;