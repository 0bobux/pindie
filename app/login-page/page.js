import { AuthForm } from "../components/AuthForm/AuthForm"
import Styles from "./login-page.module.css"

export default function Login() {
    return (
        <main className={"main-inner"}>
            <form className={Styles['form']}>
                <h2 className={Styles['form__title']}>Авторизация</h2>
                <div className={Styles['form__fields']}>
                    <label className={Styles['form__field']}>
                        <span className={Styles['form__field-title']}>Email</span>
                        <input className={Styles['form__field-input']} type="email" placeholder="hello@world.com"/>
                    </label>
                    <label className={Styles['form__field']}>
                        <span className={Styles['form__field-title']}>Пароль</span>
                        <input className={Styles['form__field-input']} type="password" placeholder='***********'/>
                    </label>
                </div>
                <div className={Styles['form__actions']}>
                    <button className={Styles['form__reset']} type="reset">Очистить</button>
                    <button className={Styles['form__submit']} type="submit">Войти</button>
                </div>
            </form>    
        </main>
    )
}