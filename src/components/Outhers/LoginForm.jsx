import React, { useContext, useEffect, useState } from 'react'
import Input from '../Form/Input';
import Button from '../Form/Button'
import useForm from '../../hooks/useForm';
import Error from '../Outhers/Error';
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import stylesButton from '../Form/Button.module.css';
import Head from './Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validateType() && password.validateType()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='fadeLeft'>
      <Head title='Login'/>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label='Usuário'
          type='text'
          id='name'
          {...username}
        />
        <Input
          label='Senha'
          type='password'
          id='password'
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos'}/>
      </form>
      <Link to={'/login/perdeu'} className={styles.lost}>Perdeu a Senha?</Link>

      <div className={styles.create}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to='/login/criar' className={stylesButton.button}>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm