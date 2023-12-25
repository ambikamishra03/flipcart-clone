import React from 'react'
import {Box, Button, Table, TableBody, TableCell, TableRow, TextField, Typography,styled} from '@mui/material'
import TermsDialog from './TermsDialog';
import { useState} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Image = styled('img')`
width:22px;
height:20px;
margin-top:5;
margin-right:5;
`;

const Offers= styled(Box)`
    font-size: 14px;
    padding: 5px;
  `;
  const OffersContainer= styled(Box)`
    padding: 5px;
  `;
  const OffersHeading= styled('span')`
    font-weight: 600;
  `;
  const Terms= styled('span')`
  font-weight: 600;
  color:blue;
  cursor:pointer;
`;
  const Container = styled(Box)`
  margin-top: 25px;
  margin-left: 30px;
  padding:10px;
`;


const Heading = styled(Typography)`
  margin-bottom:5px;
  font-size: 18px;
`;
const ProductDetail = ({ product}) => {

  const [open,setOpen] = useState(false);
  const openDialog = () =>{
    setOpen(true);
  }
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const offers = 'https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90';
  const supercoins = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50'

  const date = new Date(new Date().getTime()+(5*24*60*60*1000));

  return (
    <>
    <Container>
          <Heading>{product.title.longTitle}</Heading>
          <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}>4 ratings and 2 reviews
          <Box component="span"><img src={fassured} alt="fassured" style={{width:77,marginLeft:20}}/></Box>
          </Typography>
          <Typography>
          <Box component="span" style={{fontSize: 30}}>&#8377;{product.price.cost}</Box> &nbsp; &nbsp; &nbsp;
          <Box component="span" style={{color: '#878787'}}><strike>&#8377;{product.price.mrp}</strike></Box>&nbsp; &nbsp; &nbsp;
          <Box component="span" style={{color: '#388e3c'}}>{product.price.discount}</Box>
          </Typography>
          <OffersContainer>
          <Typography style={{fontSize:'18px', margin:5}}>Available offers</Typography>
          <Offers><Image src={offers}/><OffersHeading>Bank Offer</OffersHeading> 10% off on AU Bank Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and above <Terms onClick={()=> openDialog()}> T&C</Terms></Offers>
          <Offers><Image src={offers}/><OffersHeading>Bank Offer</OffersHeading> 10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and above <Terms onClick={()=> openDialog()}> T&C</Terms></Offers>
          <Offers><Image src={offers}/><OffersHeading>Bank Offer</OffersHeading> 10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹5,000 and above <Terms onClick={()=> openDialog()}> T&C</Terms></Offers>
          <Offers><Image src={offers}/><OffersHeading>Extra</OffersHeading> ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or more <Terms onClick={()=> openDialog()}> T&C</Terms></Offers>
          <Offers><Image src={offers}/><OffersHeading>Partener Offer</OffersHeading> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More</Offers>
          <Offers><Image src={offers}/><OffersHeading>Bank Offer</OffersHeading>5% Cashback on Flipkart Axis Bank Card <Terms onClick={()=> openDialog()}> T&C</Terms></Offers>
          <Offers><Image src={offers}/><OffersHeading>Bank Offer</OffersHeading>Flat Off ₹500 On ICICI Card<Terms onClick={()=> openDialog()}> T&C</Terms></Offers>
          <Offers><Image src={offers}/>Buy this Product & Get Extra 5% Off on DIGITEK DTR 550 LW Tripod</Offers>
          </OffersContainer>
          <TermsDialog open={open} setOpen={setOpen}/>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                <TableCell>
                <LocationOnIcon style={{color:'#2874f0' , marginTop:20, fontSize:20, marginRight:4}}/>
                <TextField variant="standard" name="pincode" label="Enter delivery pincode" />
                <Button variant='contained' style={{marginLeft:12,marginTop:8,fontSize:12}}>Enter</Button>
                <Typography  style={{fontWeight:600,marginTop:4,fontSize:14}}>Delivery By {date.toDateString()} | &#8377;40</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                <TableCell style={{fontWeight:600}}>1 year brand Warranty</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color:'#878787'}}>Seller</TableCell>
                <TableCell >
                  <Box component="span" style={{color:'#2874f0'}}>Ekart- get everything here</Box>
                  <Typography style={{fontSize:'12px'}}>14 Days return policy</Typography>
                  <Typography style={{fontSize:'12px'}}>GST Invoice available</Typography>
                  <Typography style={{fontSize:'12px', color:'green'}}>View more sellers starting from &#8377;{product.price.cost}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                 <img src={supercoins} alt="super-coins"  style={{width:400}}/> 
                 </TableCell>
              </TableRow>
              <TableRow>
              <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell style={{fontSize:13}}>{product.description}</TableCell>
              </TableRow>
              </TableBody>
              </Table>

              <Table style={{marginTop:20}}>
              <TableBody>
              <TableRow>
              <TableCell style={{fontSize:22, fontWeight:600,margin:12}}>&nbsp;Specification</TableCell>
              </TableRow>
              <TableRow>
              &nbsp;<Typography style={{marginLeft:15,fontSize:18}}>In the Box</Typography>
              <Typography style={{marginLeft:15,marginTop:15, fontSize:16}}>1 {product.title.longTitle}</Typography>&nbsp;
              </TableRow>
              </TableBody>
</Table>
          </Container>
    </>
  )
}

export default ProductDetail
