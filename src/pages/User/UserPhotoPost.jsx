import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button'
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import styles from './UserPhotoPost.module.css'
import Error from '../../components/Outhers/Error';
import { useEffect, useState } from 'react';
import { PHOTO_POST } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Head from '../../components/Outhers/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    })
  }

  return (
    <section className={`${styles.photoPost} fadeLeft`}>
      <Head title='Postar'/>
      <form onSubmit={handleSubmit} className={styles.photoPost}>
        <Input
          type='text'
          id='nome'
          label='Nome'
          {...nome}
        />
        <Input
          type='number'
          id='peso'
          label='Peso'
          {...peso}
        />
        <Input
          type='number'
          id='idade'
          label='Idade'
          {...idade}
        />
        <input
          className={styles.img}
          type='file'
          id='img'
          name='img'
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {error && <Error erro={error}/>}
      </form>
      <div>
        {img.preview && (
          <div 
            className={styles.preview} 
            style={{backgroundImage: `url("${img.preview}")`}}
          ></div>
        )}
      </div>
    </section>
  )
}

export default UserPhotoPost