import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { ThemeProvider, createTheme, styled } from '@mui/material';
import { getDesignTokens } from './components/theme';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(localStorage.getItem("currentMode")?localStorage.getItem("currentMode"):"light");
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (

    <ThemeProvider theme={theme}>


    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    <Topbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />


<Sidebar open={open} handleDrawerClose={handleDrawerClose} />


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      
<DrawerHeader />

      <Outlet />
      
      </Box>

    </Box>
    </ThemeProvider>



  );
}