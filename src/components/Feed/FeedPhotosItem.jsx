import ImageLoading from '../Outhers/ImageLoading'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhotos }) => {
  
  function handleClick() {
    setModalPhotos(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <ImageLoading src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem