import { useState , useContext} from "react";
import React from "react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import {authenticateLogin, authenticateSignup} from '../../service/api'
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const ImageContainer = styled(Box)`
  width: 30%;
  height: 85%;
  background: #2874f0;
  background-image: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png);
  background-position: center 85%;
  background-repeat: no-repeat;
  padding: 45px 40px;
  & > p,
  & > h5 {
    color: white;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 18px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  height: 48px;
  color: #fff;
  border-radius: 3px;
`;
const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  height: 48px;
  color: #2874f0;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: centre;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;


const accountInitialValues = {
  login:{
    view:'login',
    heading:"Login",
    subHeading:"Get access to your Orders, Wishlist and Recommendations"
  },
  signup:{
    view:'signup',
    heading:"Looks like you're new here!",
    subHeading:"Sign up with your mobile number to get started"
  }
}

const signupInitialValues = {
  myname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}


const loginInitialValues= {
  username:'',
  password:''
}
const LoginDialog = ({ open, setOpen }) => {
  const [account,toggleAccount] = useState(accountInitialValues.login);
  const [signup,setSignup] = useState(signupInitialValues);
  const [login,setLogin] = useState(loginInitialValues);
  const [error,setError] = useState(false);

    const {setAccount} =useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () =>{
    toggleAccount(accountInitialValues.signup);
  }

  // for signup
   
  const onInputChange =(e) =>{
  setSignup({...signup,[e.target.name]:e.target.value});
  // console.log(signup);
  }

  const signupUser = async () =>{
    let response = await authenticateSignup(signup); 
    if(!response) return;
    handleClose();
    console.log(response.data);
    setAccount(signup.myname);
  }
  // for login
  const toggleLogin = () =>{
    toggleAccount(accountInitialValues.login);
  }
 
  const onValueChange =(e) =>{
    setLogin({...login,[e.target.name]:e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        // console.log(response);
        if (response && response.status === 200) {
          handleClose();
          setAccount(response.data.data.username);
        }else{
             setError(true);
        }
      } 
    

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <ImageContainer>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography>{account.subHeading}</Typography>
          </ImageContainer>
          { 
            account.view === 'login' ?
          <Wrapper>
            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Username" />
            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
            { error && <Alert severity="error" style={{fontSize:'12px'}}>Please enter valid username or password</Alert> }
            <Text>By continuing, you agree to flipcart's terms of use and privacy policy.</Text>
            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <Typography style={{ textAlign: "centre" }}>OR</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccount onClick={()=> toggleSignup()}>New to flipcart?Create an account</CreateAccount>
          </Wrapper>
          :   
           <Wrapper>
            <TextField variant="standard" label="Enter Your Name" name="myname" onChange={(e)=> onInputChange(e)}/>
            <TextField variant="standard" label="Enter Username" name="username" onChange={(e)=> onInputChange(e)}/>
            <TextField variant="standard" label="Enter Email" name="email" onChange={(e)=> onInputChange(e)}/>
            <TextField variant="standard" label="Enter Password" name="password" onChange={(e)=> onInputChange(e)}/>
            <TextField variant="standard" label="Enter Mobile No." name="phone" onChange={(e)=> onInputChange(e)}/>
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            <CreateAccount onClick={()=> toggleLogin()}>Existing user?Login</CreateAccount>
          </Wrapper>
          }
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
