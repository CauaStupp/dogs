import { PHOTO_DELETE } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const {loading, request} = useFetch();
  
  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const token = localStorage.getItem('token')
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.button}>Deletando...</button>
      ) : (
        <button onClick={handleClick} className={styles.button}>Deletar</button>
      )}   
    </>
  )
}

export default PhotoDelete