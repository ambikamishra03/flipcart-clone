import { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)({
  background: '#fff',
  width:'33%',
  borderRadius:'2px',
  marginLeft:'10px',
  display:'flex'
});

const InputSearchBase = styled(InputBase)({
  paddingLeft: '20px',
  width:'100%',
  fontSize:'unset'
});

const SearchIconWrapper = styled(Box)({
  color: 'blue',
  padding:'5px',
  display:'flex'
});

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const Search = () => {
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
      setOpen(false)
  }

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

  return (
      <SearchContainer>
          <InputSearchBase
            placeholder="Search for products, brands and more"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => getText(e.target.value)}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          {
            text && 
            <ListWrapper hidden={open}>
              {
                products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                  <ListItem>
                    <Link 
                      to={`/product/${product.id}`} 
                      style={{ textDecoration:'none', color:'inherit'}}
                      onClick={() => setOpen(true)}  
                    >
                      {product.title.longTitle}
                    </Link>
                  </ListItem>
                ))
              }  
            </ListWrapper>
          }
      </SearchContainer>
  )
}

export default Search;
