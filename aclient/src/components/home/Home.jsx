import React, {useEffect} from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import {getProducts} from '../../redux/actions/productActions'
import {useDispatch, useSelector} from 'react-redux'
import { Box , styled} from "@mui/material";
import ProdSlide from './ProdSlide'
import MidSlide from './MidSlide'
import Midsection from './Midsection'

const Component = styled(Box)({
  padding: '10px',
  backgroundColor:'#f2f2f2'
});

const Home = () => {
   const { products } = useSelector(state => state.getProducts)
  //  console.log(products);
   
   const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])  // if called for componentdidmount so empty array, value passed in array for componentdidupdate

  return (
    <>
      <Navbar/>
      <Component>
      <Banner/>
      <MidSlide products={products} title="Deal of the day" timer={true}/>
      <Midsection/>
      <ProdSlide products={products} title="Discount for you" timer={false}/>
      <ProdSlide products={products} title="Suggested items" timer={false}/>
      {/* <ProdSlide products={products} title="Top selections" timer={false}/>
      <ProdSlide products={products} title="Trending Offers" timer={false}/>
      <ProdSlide products={products} title="Home essentials" timer={false}/>
      <ProdSlide products={products} title="Top pics in men's wear" timer={false}/>
      <ProdSlide products={products} title="Home Appliances" timer={false}/>
      <ProdSlide products={products} title="Recent views" timer={false}/>

 */}
      </Component>
      
    </>
  )
}

export default Home
