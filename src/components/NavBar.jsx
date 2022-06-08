import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from "react-router-dom"
import "../styles/navbar.css"

// ARRAYS PARA IMPRIMIR MENU Y USER MENU

const pages = [{name: "Home", to:"/" }, {name: "Cities", to:"/buildingpage"}];
const settings = ['Sign Up', 'Log In'];


// DECLARO COMPONENTE FUNCIONAL
// SETEO DE HOOKS PARA AMBOS MENUES

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

// APLICO ESCUCHADORES DE EVENTOS

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // INICIALIZO HOOKS EN FALSE

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // IMPRIMO
   
  return (
    <AppBar position="static" sx={{backgroundColor:"white", color: "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

  {/* // LOGO */}

      <Box sx={{display: {xs:"none", md: "flex"}, mr:1}}>
        <img src={process.env.PUBLIC_URL+"/assets/logo2.png"} alt="logo" style={{width:"100px"}}/>
      </Box>
      
  {/* // MENU HAMBURGUESA */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <LinkRouter to={page.to} key={index} onClick={handleCloseNavMenu}className="Links">
                <MenuItem>
                  <Typography sx={{color:"black", fontFamily:"'Paytone One', sans-serif"}}textAlign="center">{page.name}</Typography>
                </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
          


          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily:"monospace",
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

{/* //LOGO RESPONSIVE */}
          <Box>
            <img src={process.env.PUBLIC_URL+"/assets/logo2.png"} alt="logo" style={{width:"100px"}}/>
          </Box>
          </Typography>

{/* //MENU */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <LinkRouter to={page.to} key={index}
              onClick={handleCloseNavMenu} className="Links">
                <button className='navbar-button'> {page.name}
               </button>
              </LinkRouter>
            ))}
          </Box>

{/* //USER MENU */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="userlogo" src={process.env.PUBLIC_URL+"/assets/userlogo.png"}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{color:"black", fontFamily:"'Paytone One', sans-serif"}} textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
