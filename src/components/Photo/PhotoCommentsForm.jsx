import React, { useState } from 'react';
import Enviar from '../../assets/enviar.svg?react'
import useFetch from '../../hooks/useFetch';
import Error from '../Outhers/Error';
import { COMMENT_POST } from '../../api/api';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('');
  const { request, error, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, {comment}, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments(comments => [...comments, json])
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single: ''}`}>
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment} 
        onChange={({target}) => setComment(target.value)}
      ></textarea>
      {loading ? (
        <button disabled className={styles.button}>Enviando...</button>
      ) : (
        <button className={styles.button}>
          <Enviar />
        </button>
      )}
      
      {error && <Error error={error}/>}
    </form>
  )
}

export default PhotoCommentsForm