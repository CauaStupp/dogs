import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css'
import PhotoComments from './PhotoComments';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import PhotoDelete from './PhotoDelete';
import ImageLoading from '../Outhers/ImageLoading';

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <div 
      className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <ImageLoading src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id}/>
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attri}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade > 1 ? 'anos' : 'ano'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments 
        id={photo.id}
        comments={comments}
        single={single}
      />
    </div>
  )
}

export default PhotoContent