import { Route, Routes } from 'react-router-dom';
import styles from './User.module.css';
import UserHeader from './UserHeader';
import Feed from '../../components/Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import NotFound from '../NotFound';
import Head from '../../components/Outhers/Head';


const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className='container'>
      <Head title='Minha conta'/>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />}/>
        <Route path='postar' element={<UserPhotoPost />}/>
        <Route path='estatisticas' element={<UserStats />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </section>
  )
}

export default User