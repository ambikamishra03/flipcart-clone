import { Box ,Button, styled } from '@mui/material'
import { useState } from 'react';
import { ShoppingCart, FlashOn } from '@mui/icons-material'


import { useNavigate } from 'react-router-dom';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';


const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('md')]: {
      padding: '20px 40px'
  }
}))

const Image = styled('img')({
  padding: '15px 20px',
  border: '1px solid #f0f0f0',
  width: '95%'
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #FFF;
`;

const ActionItem = ( { product }) => {
  const navigate = useNavigate();
  const { id } = product;
      
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
}
  return (
    <LeftContainer>
    <Image src={product.detailUrl} alt="product" />
      <StyledButton variant='contained' onClick={() => addItemToCart()} style={{marginRight:10, background:'#ff9f00'}}><ShoppingCart/>Add to cart</StyledButton>
      <StyledButton style={{background: '#fb641b'}} variant="contained"><FlashOn /> Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem
