import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {title} = useParams()
  return (
    <>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta doloremque odit cumque.</h1>
    😉 {title}

    </>
  )
}

export default Details