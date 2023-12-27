import React from 'react'
import { useEffect } from 'react'

const Head = ({ title, description }) => {

  useEffect(() => {
    document.title = title + ' | Dogs';
    document.querySelector('meta[name="description"]')
    .setAttribute('content', description || '');
  }, [title, description])

  return (
    <></>
  )
}

export default Head