import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch'
import styles from './FeedModal.module.css'
import { PHOTO_GET } from '../../api/api';
import Error from '../Outhers/Error';
import Loading from '../Outhers/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options)
  }, [photo, request])

  function handleOutClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutClick}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal