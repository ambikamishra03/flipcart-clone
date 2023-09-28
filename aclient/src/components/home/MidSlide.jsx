
import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './ProdSlide'


const Container = styled(Box)`
    display: flex;
    `;
    const Image = styled('img')`
    width: 217px;
    `;
    const Left = styled(Box)(({ theme}) => ({
      width: '83%',
      [theme.breakpoints.down('md')]: {
          width: '100%'
      }
  }))
  const Right = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ( {products, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Container> 
      <Left>
      <Slide products={products} title={title} timer={timer}/>
      </Left>
      <Right>
      <Image src={adURL} alt="ad" />
    </Right>
    </Container>
  )
}

export default MidSlide
