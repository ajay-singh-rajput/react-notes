import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProduct } from '../store/actions/ProductAction'

const Product = () => {

    const {product} = useSelector((state)=>state.ProductReducer)
    // console.log(product)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(asyncGetProduct())
    }, [])
    
  return (
    <>
    <ul>
        {product ?
        product.map((e)=>
        <li key={e.id}>{e.title}</li>
        ):<h1>Loading.....</h1>    
    }
    </ul>
    </>
  )
}

export default Product