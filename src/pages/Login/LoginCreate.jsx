import React, { useContext } from 'react'
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Error from '../../components/Outhers/Error'
import useForm from '../../hooks/useForm';
import { USER_POST } from '../../api/api';
import UserContext from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import Head from '../../components/Outhers/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className='fadeLeft'>
      <Head title='Cadastro'/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          id='username'
          label='Usuário'
          {...username}
        />
        <Input
          type='text'
          id='email'
          label='Email'
          {...email}
        />
        <Input
          type='password'
          id='password'
          label='Senha'
          {...password}
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate