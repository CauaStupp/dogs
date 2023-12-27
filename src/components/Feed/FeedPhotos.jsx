import React, { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../api/api';
import Loading from '../Outhers/Loading';
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ setModalPhotos, user, page, setInfinite }) => {

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({page, total, user});
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error}/>
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={styles.feed + ' fadeLeft'}>
        {data.map(item => (
          <FeedPhotosItem 
            key={item.id} 
            photo={item}
            setModalPhotos={setModalPhotos}
          />
        ))}
      </ul>
    )
  else return null;
}

export default FeedPhotos