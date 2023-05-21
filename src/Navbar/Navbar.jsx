import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Box , Typography ,List , ListItem , 
  ListItemButton , ListItemText , ListItemIcon , 
  Toolbar , AppBar , Drawer , Divider , TextField , InputAdornment } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import BackupIcon from '@mui/icons-material/Backup';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import InventoryIcon from '@mui/icons-material/Inventory';

function Navbar() {
    const [open, setOpen] = useState(false);
    const drawerWidth = 310;
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const icons = [<ArticleIcon sx={{color : 'blue'}}/>,<DescriptionIcon sx={{color : 'green'}}/>,<TextSnippetIcon sx={{color : '#8B8000'}}/>,<InventoryIcon sx={{color : 'purple'}}/>];
    return (
      <>
      <AppBar position="fixed" open={open} style={{ background: 'white',display : 'flex',padding:3 }}>
          <Toolbar style={{justifyContent : 'space-between'}}>
          <Box display="flex">
            <IconButton
              color="#5f6572"
              aria-label="open drawer"
              fontWeight = "900"
              fontSize = "40"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
            <MenuIcon />
            </IconButton>
            <img src={logo} alt='logo' height={50} />
            <Typography variant="h5" style={{fontWeight : 900,color : '#5f6572',paddingTop : 10}}>
              Docs-Clone
            </Typography>
          </Box>
            <TextField
              placeholder='Search...'
                sx = {{
                  borderRadius : '10px',
                  flexGrow : 0.4,
                  backgroundColor : '#f1f3f4',
                  padding : 0,
                  "& fieldset": { border: 'none' },
                }}
                InputProps={{
                  startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment> )
                  }}/>
            <Box display='flex'>
              <AppsIcon sx={{
                color : '#5f6368',
                height : 40
              }}/>
              <Avatar sx={{width : 40,height : 40,ml:3,backgroundColor:'#8d6e63'}}>K</Avatar>
            </Box>
          </Toolbar>
        </AppBar>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="temporary"
          onBackdropClick={handleDrawerClose}
          anchor="left"
          open={open}
        >
            <Typography
            sx={{
              textAlign : "center",
              padding : 2,
              fontWeight : 900,
              color : '#4285f4',
              fontSize : 26
            }}>
              Google-Docs-Clone
            </Typography>
          <Divider />
          <List>
            {['Docs', 'Sheets', 'Slides', 'Forms'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Settings', 'Help & Feedback'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <SettingsOutlinedIcon/> : <HelpOutlineOutlinedIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BackupIcon sx={{color : 'orange'}}/>
                </ListItemIcon>
              <ListItemText>Drive</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <List style={{ marginTop: `auto`}} >
            <ListItem style={{textAlign : 'center'}}>
              <ListItemText>Privacy Policy ~ Terms Of Service</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      </>
    );
}

export default Navbar;