import { Box , styled, Typography} from "@mui/material";
import React from "react";
import { navData } from "../../constants/Data";

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflowX: 'hidden',
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))

  const Container = styled(Box)({
    padding:'12px 8px',
    textAlign:'center'
  });


const Navbar = () => {
  return (
    <Box style={{  background: '#fff'}}>
    <Component>
      {navData.map((data) => (
        <Container key={data.text} >
          <img src={data.url} alt="nav"  style={{width:'64px'}}/>
          <Typography style={{fontSize:'15px',fontWeight:'600',fontFamily:'inherit'}}>{data.text}</Typography>
        </Container>
      ))}
    </Component>
    </Box>
  );
};

export default Navbar;
