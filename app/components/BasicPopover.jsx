import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover({button_text = "Submit",pop_text="Please Sign In to Continue"}){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;
  
//   todo: copy button styles here too

  return (
    <div>
        
      <Button aria-describedby={id} size="small"
          color="secondary"
          component="button"
          variant="contained" onClick={handleClick}>
        {button_text}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{pop_text}</Typography>
      </Popover>
    </div>
  );
}
