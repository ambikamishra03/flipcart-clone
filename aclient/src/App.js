import { Box } from '@mui/material';
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx';
import DataProvider from './context/DataProvider.js'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import DetailView from './components/details/DetailView.jsx';
import Cart from './components/cart/Cart'


function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Header/>
    <Box style={{marginTop:'55px'}}>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/product/:id' element={<DetailView/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>
    </Box>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
