import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginLeft: 5
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    authUser: 'ADMIN'
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              SERVICE @ by S I R A
            </Typography>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Button variant="contained" style={{'background': "#00b0ff", "color": "white"}} className={classes.button}>
                Dashboard
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/emails">
              <Button variant="contained" style={{'background': "#f50057", "color": "white"}} className={classes.button}>
                Email View
              </Button>
            </Link>
            {auth ? (
              <div>
                <Button
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                  <Typography variant="subtitle2" color="inherit" className={classes.grow} style={{marginLeft: '2px'}}>
                    {this.state.authUser}
                  </Typography>
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                > 
                   <Link style={{ textDecoration: 'none' }} to="/profile">
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                   </Link>
                  <Link style={{ textDecoration: 'none' }} to="/login">
                    <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                  </Link>
                </Menu>
              </div>
            ) : <Button color="inherit">Login</Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);