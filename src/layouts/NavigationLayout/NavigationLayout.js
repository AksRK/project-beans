import {Outlet} from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

function NavigationLayout() {

    return (
        <div className={'container'}>
            <Outlet/>
            <Navigation/>
        </div>
    )
}

export default NavigationLayout;
