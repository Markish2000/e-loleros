import {
  Box,
  ListItem,
  ListItemText,
  ListItemButton,
  Drawer,
  ListItem,
  List,
} from '@mui/material';
import React from 'react';
import LinkRouter from '../LinkRouter';
import { useState } from 'react';

const NavBarDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      open={open}
      anchor='right'
      onClose={() => setOpen(false)}
      sx={{
        display: { xs: 'block', sm: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60vw' },
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          <ButtonTheme />
          <ListItem
            button
            component={Link}
            to='home'
            onClick={() => setOpen(false)}
          >
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='shop'
            onClick={() => setOpen(false)}
          >
            <ListItemText primary='Shop' />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='about'
            onClick={() => setOpen(false)}
          >
            <ListItemText primary='About' />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='login'
            onClick={() => setOpen(false)}
          >
            <ListItemText primary='Contact' />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='singin'
            onClick={() => setOpen(false)}
          >
            <ListItemText primary='Contact' />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default NavBarDrawer;
