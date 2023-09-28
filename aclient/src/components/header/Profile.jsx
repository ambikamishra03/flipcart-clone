import { Box, Typography, styled } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const SpacedBox = styled(Box)`
  margin: 3px;
`;

const Logout = styled(Typography)`
  margin-left: 3px;
  font-size: 14px;
  color: #2874f0;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount('');
  };

  return (
    <>
      <SpacedBox onClick={handleClick}>
        <Typography>{account}</Typography>
      </SpacedBox>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
