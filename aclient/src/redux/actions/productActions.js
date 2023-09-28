
import axios from "axios";
import * as actionTypes from  '../constants/productConstant';
  
const URL= "" ;


// getProducts = () => normal function  | async () => middleware
export const getProducts = () => async (dispatch) =>{
    try {
       const { data } = await axios.get(`${URL}/products`);
       dispatch({ type:actionTypes.GET_PRODUCTS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type:actionTypes.GET_PRODUCTS_FAILURE, payload:error.message});
    }
}

// by using redux we dispatch value while calling api, dispatch function calls usereducer hook


export const getProductDetails = (id) => async (dispatch) =>{
    try {
       dispatch({ type:actionTypes.GET_PRODUCTS_DETAILS_REQUEST});
              const { data } = await axios.get(`${URL}/product/${id}`);
              dispatch({ type:actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data});
              
    } catch (error) {
        dispatch({ type:actionTypes.GET_PRODUCTS_DETAILS_FAILURE, payload:error.message});
    }
}