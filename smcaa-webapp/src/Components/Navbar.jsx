import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#6a1b9a', borderTop: '2px solid #fff' }}>
      <Toolbar sx={{ gap: 2 }}>
        <IconButton color="inherit" sx={{ mr: 'auto' }} href="#home">
          <img
            alt="SMCAA Logo"
            src={`${process.env.PUBLIC_URL}/SMCAA.png`}
            style={{ width: '40px', height: '40px' }}
          />
        </IconButton>
        <Button color="inherit" href="#mission">Mission</Button>
        <Button color="inherit" href="#vision">Vision</Button>
        <Button color="inherit" href="#principles">Principles</Button>
        <Button color="inherit" component={Link} to="/programs">Programs</Button>
        <Button color="inherit" component={Link} to="/community-events">Community Events</Button>
        <Button color="inherit" href="#support">Support</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;