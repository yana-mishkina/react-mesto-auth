import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({
      email: email,
      password: password
    });
  }

  return (
    <section className='route-page'>
      <form className='route-form register__form' onSubmit={handleSubmit}>
        <h2 className='route-form__title'>Регистрация</h2>
        <input 
          className='route-form__input'
          placeholder='Email'
          required
          type='email'
          value={email}
          onChange={handleEmailChange} 
          />
        <input 
          className='route-form__input'
          placeholder='Пароль'
          required
          type='password'
          minLength='4'
          value={password}
          onChange={handlePasswordChange} 
          />
        <button className='button button_type_submit route-form__button' type='submit'>{props.isLoadingData ? 'Регистрация...' : 'Зарегистрироваться'}</button>
        <Link className='route-form__link' to='/sign-in'>Уже зарегистрированы? Войти</Link>
      </form>
   </section>
  )
}

export default Register;