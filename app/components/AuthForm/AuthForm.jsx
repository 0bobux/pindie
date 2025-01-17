import Styles from './AuthForm.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { authorize } from '@/app/api/api-utils';
import { endpoints } from '@/app/api/config';
import { isResponseOk, getMe } from '@/app/api/api-utils';

import { useStore } from '@/app/store/app-store';

export const AuthForm = (props) => {

  const authContext = useStore();
  const [authData, setAuthData] = useState({ identifier: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authorize(endpoints.auth, authData);
  if (isResponseOk(userData)) {
      authContext.login(userData.user, userData.jwt);
      setMessage({ status: "success", text: "Вы авторизовались!" });
  } else {
    setMessage({ status: "error", text: "Неверные почта или пароль" });
  }
};

  useEffect(() => {
    authorize(endpoints.auth, {identifier: 'aski@example.com', password: 'ilovehtml'})
      
  }, [])

  useEffect(() => {
    let timer; 
    if (authContext.user) {
      timer = setTimeout(() => {
              /* В props close лежит функция закрытия попапа */
        props.close();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [authContext.user]);

  return (
    <form onSubmit={handleSubmit} className={Styles['form']}>
      <h2 className={Styles['form__title']}>Авторизация</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input onInput={handleInput} className={Styles['form__field-input']} type="email" placeholder="hello@world.com" name="identifier"/>
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input onInput={handleInput} className={Styles['form__field-input']} type="password" placeholder='***********' name="password"/>
        </label>
      </div>
      {message.status && (
        <p className={Styles["form__message"]}>{message.text}</p>
      )} 
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit">Войти</button>
      </div>
    </form>
  ) 
};
