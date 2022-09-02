import './Tst.scss'
import Navigation from "../../components/Navigation/Navigation";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import OurApprouch from "../../components/OurApproach/OurApprouch";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import WhoIsThere from "../../components/WhoIsThere/WhoIsThere";
import OurProjects from "../../components/OurProjects/OurProjects";
import Footer from "../../components/Footer/Footer";

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
                    <OurProjects/>

                    <div id={'id'}></div>
                </section>
                <section className={'page__item page__item--black'}>
                    <Footer/>
                </section>
                <Navigation/>
            </div>
        </div>
    )
}

export default Tst;