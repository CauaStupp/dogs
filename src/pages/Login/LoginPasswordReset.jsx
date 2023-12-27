import React, { useEffect, useState } from 'react'
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import Error from '../../components/Outhers/Error'
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { PASSWORD_RESET } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Head from '../../components/Outhers/Head';

const LoginPasswordReset = () => {
  const { loading, error, request } = useFetch();
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validateType()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login')
    }
  }

  return (
    <section>
      <Head title='Resetar Senha'/>
      <h1 className='title'>Resetar sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type='password'
          label='Nova senha'
          id='password'
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}  
      </form>
      <Error error={error}/>
    </section>
  )
}

export default LoginPasswordReset