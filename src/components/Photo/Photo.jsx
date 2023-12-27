import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import Error from '../Outhers/Error';
import { PHOTO_GET_ID } from '../../api/api';
import Loading from '../Outhers/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Outhers/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET_ID(id);
    request(url, options);
  }, [id, request])

  if (error) return <Error error={error}/>
  if (loading) return <Loading />
  if (data) 
    return (
      <section className='container mainContainer'>
        <Head title={data.photo.title}/>
        <PhotoContent data={data} single={true}/>
      </section>
    )
  else return null;
}

export default Photo