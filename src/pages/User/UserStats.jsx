import React, { Suspense, lazy, useEffect } from 'react'
import Head from '../../components/Outhers/Head'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Outhers/Loading';
import Error from '../../components/Outhers/Error'
import { GET_STATS } from '../../api/api';
const Stats = lazy(() => import('../../components/Outhers/Stats'))

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token')
      const { url, options } = GET_STATS(token);
      await request(url, options)
    }
    getData();
  }, [request])

  if (error) return <Error error={error}/>
  if (loading) return <Loading />
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title='Estatísticas'/>
        <Stats data={data}/>
      </Suspense>
    )
  else return null;
}

export default UserStats