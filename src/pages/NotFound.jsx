import React, { useContext } from 'react'
import Button from '../components/Form/Button'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import UserContext from '../context/UserContext'

const NotFound = () => {
  const { data } = useContext(UserContext);


  return (
    <div className='container mainContainer'>
      <h1 className='title'>Erro: 404</h1>
      <p className={styles.p}>Página não encontrada.</p>

      {!data ? (
        <div className={styles.links}>
          <Link to='/login' >
            <Button>Login</Button>
          </Link>
          <Link to='/login/criar' >
            <Button>Cadastre-se</Button>
          </Link>
        </div>
      ) : (
        <div className={styles.links}>
          <Link to={'/'}>
            <Button>Home</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default NotFound