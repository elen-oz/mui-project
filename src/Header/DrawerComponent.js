import { React, useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {props.links.map((item) => (
            <ListItemButton>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ ml: 'auto' }}>
        <MenuIcon color='black' />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
