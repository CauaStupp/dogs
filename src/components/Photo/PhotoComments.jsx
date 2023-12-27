import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../context/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments)
  const { login } = useContext(UserContext);
  const commentsSection = useRef(null);
  
  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul className={`${styles.comments} ${props.single ? styles.single : ''}`} ref={commentsSection}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm id={props.id} single={props.single} setComments={setComments}/>
      )}
    </>
  )
}

export default PhotoComments