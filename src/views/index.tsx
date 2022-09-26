import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, ThemeProvider, createTheme, IconButton, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SwipeableTemporaryDrawer from '@components/drawer'
import logo from '@assets/images/logo.png'

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const showDrawer = () => {
    setIsOpenDrawer(true);
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff',
      }
    },
  });

  const appBarLabel = (label: string) => {
    return (
      <Toolbar className="justify-center" style={{ minHeight: '50px',borderBottom: '1px solid rgb(202, 202, 202)' }}>
          <IconButton 
            size="large" 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ mr: 2,color: 'rgb(138, 184, 25)',position: 'absolute',left: '20px',top: '13,5px' }} 
            onClick={ showDrawer }
          >
              <MenuIcon/>
          </IconButton>
          <Typography component="div" variant="h6" sx={{ display: 'flex', width: '110px',justifyContent: 'center', cursor: 'pointer' }}>
            <img src={logo} alt="logo" className="w-full" />
          </Typography>
      </Toolbar>
    );
  }

  return (
    <Box className="wrap">
       <ThemeProvider theme={darkTheme}>
        <AppBar position="static" enableColorOnDark sx={{ height: '50px' }}>
          {appBarLabel('default')}
        </AppBar>
      </ThemeProvider>
      <SwipeableTemporaryDrawer isOpenDrawer={isOpenDrawer} direction="left" onDrawer={setIsOpenDrawer}></SwipeableTemporaryDrawer>
      <Outlet />
    </Box>
  )
}

export default App
