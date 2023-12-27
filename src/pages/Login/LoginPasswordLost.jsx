import React from 'react'
import Input from '../../components/Form/Input';
import useForm from '../../hooks/useForm';
import Button from '../../components/Form/Button'
import Error from '../../components/Outhers/Error'
import useFetch from '../../hooks/useFetch'
import { PASSWORD_LOST } from '../../api/api';
import Head from '../../components/Outhers/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validateType()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      });
      const { response, json } = await request(url, options);
    }
  }

  return (
    <section>
      <Head title='Recuperar senha'/>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input 
            label='Email / Usuário'
            type='text'
            id='login'
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          {error && <Error error={error}/>}
        </form>
      )}
    </section>
  )
}

export default LoginPasswordLost