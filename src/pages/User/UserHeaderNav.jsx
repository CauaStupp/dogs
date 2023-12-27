import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import MyPhotos from '../../assets/feed.svg?react'
import Stats from '../../assets/estatisticas.svg?react'
import NewPhoto from '../../assets/adicionar.svg?react'
import Logout from '../../assets/sair.svg?react'
import UserContext from '../../context/UserContext'
import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia'

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const { pathname } = useLocation();


  useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  function handleLogout() {
    userLogout();
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button 
          aria-label='Menu'
          className={`${styles.menuMobile} ${mobileMenu && styles.menuActive}`}
          onClick={() => 
          setMobileMenu(!mobileMenu)}
        ></button>
      )}
      
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/conta' end>
          <MyPhotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <Stats />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar'>
          <NewPhoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav