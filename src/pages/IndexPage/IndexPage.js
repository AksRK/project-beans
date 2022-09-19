import './IndexPage.scss'
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import OurApprouch from "../../components/OurApproach/OurApprouch";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import WhoIsThere from "../../components/WhoIsThere/WhoIsThere";
import OurProjects from "../../components/OurProjects/OurProjects";
import Footer from "../../components/Footer/Footer";


function IndexPage () {

    return (
        // <div className={'container'}>
        //     <div className={'page'}>
        //         <section className={'page__item'}>
        //             <Header/>
        //             <Banner/>
        //             <div id={'WhoIsThere'}></div>
        //             <WhoIsThere/>
        //             <div id={'HowWeWork'}></div>
        //             <HowWeWork/>
        //             <div id={'OurApprouch'}></div>
        //             <OurApprouch/>
        //             <div id={'OurProjects'}></div>
        //             <OurProjects/>
        //
        //             <div id={'id'}></div>
        //         </section>
        //         <section className={'page__item page__item--black'}>
        //             <Footer/>
        //         </section>
        //     </div>
        // </div>
        <div className={'page'}>
            <section className={'page__item'}>
                <Header/>
                <Banner/>
                <div id={'WhoIsThere'}></div>
                <WhoIsThere/>
                <div id={'HowWeWork'}></div>
                <HowWeWork/>
                <div id={'OurApprouch'}></div>
                <OurApprouch/>
                <div id={'OurProjects'}></div>
                <OurProjects/>
                <div id={'id'}></div>
            </section>
            <section className={'page__item page__item--black'}>
                <Footer/>
            </section>
        </div>
    )
}

export default IndexPage;
