import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import Dogs from '../../assets/dogs.svg?react'
import styles from './Header.module.css';


const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={'container ' + styles.nav}>
        <Link to='/' aria-label='Dogs - Home' className={styles.logo}>
          <Dogs />
        </Link>
        {!data ? (
          <Link to='/login' className={styles.login}>Login / Criar</Link>
        ) : (
          <Link to='/login' className={styles.login}>
            {data.nome}
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header