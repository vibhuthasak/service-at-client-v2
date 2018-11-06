import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const styles = theme => ({
  root: {
    marginTop: '80px'
  },
  grow: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#3f51b5',
    width: '30%',
    marginLeft: 10,
    borderRadius: theme.shape.borderRadius
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '90%'
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  button: {
    marginLeft: theme.spacing.unit,
    minWidth: 0
  },
  Toolbar:{
    minHeight: 48
  }
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal : ''
    }
  }

  SearchBarTyping(e) {
    // console.log(e.target.value
    this.setState({
      searchVal: e.target.value,
    });
  }

  onClickGetEmails() {
    if(this.state.searchVal.length !== 0) {
      // fetch('emails.json')
      //   .then(
      //     function(response) {
      //       if (response.status !== 200) {
      //         console.log('Looks like there was a problem. Status Code: ' + response.status);
      //         return;
      //       }
      //       // Examine the text in the response
      //       response.json().then(function(data) {
      //         console.log(data);
      //         this.props.handleEmailChange(data)
      //         // this.setState({
      //         //   EmailsFromServer: data
      //         // })
      //       }.bind(this));
      //     }.bind(this)
      //   )
      //   .catch(function(err) {
      //     console.log('Fetch Error :-S', err);
      //   });
      axios.get('localhost:3009/api/getEmailList', {
        params: {
          cxemail: this.state.searchVal
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.Toolbar}>
            <div className={classes.search}>
              <InputBase
                placeholder="Search"
                type='email'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={this.SearchBarTyping.bind(this)}
              />
            </div>
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.onClickGetEmails.bind(this)}>
              <SearchIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
