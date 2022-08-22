import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ShareContent from '../ShareContent/shareContent';
import ShareIcon from "../../assets/share.svg";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{background: 'black'}}
        variant="contained"
      >
        Share <img src={ShareIcon}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          style: {padding: 0}
        }}
      >
        <ShareContent/>
      </Menu>
    </div>
  );
}
