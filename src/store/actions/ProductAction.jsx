import axios from "axios"
import { getProducts } from "../reducer/ProductReducer";


export const asyncGetProduct = ()=> async (dispatch, getState)=>{
    try {
        const {data} = await axios.get('https://fakestoreapi.com/products');
        // console.log(data,'data aa gya')
        dispatch(getProducts(data))
    } catch (error) {
        console.log(error,'prdc error')
    }
}