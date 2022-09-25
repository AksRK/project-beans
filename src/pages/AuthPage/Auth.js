import Logo from "../../components/UI/Logo/Logo";
import './Auth.scss'


function Auth() {


    return (
        <div className={'page'}>
            <section className={'page__item'}>
                <Logo/>

                АВТОРИЗАЦИЯ
                <div style={{height:'80vh'}}></div>
            </section>
        </div>
    )
}

export default Auth;
