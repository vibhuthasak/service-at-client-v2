import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ActionsBarOptions from '../components/ActionsBarOptions';

const styles = {
  card: {
    minWidth: 275,
    height: 50,
    background: 'rgb(0, 176, 255)',
    marginTop: 16,
    marginLeft: 10,
    marginRight: 10
  },
  actionPanel: {
    'marginTop': 14,
    'marginLeft': 60,
    'marginBottom': 16,
    'color': 'white',
    'fontSize': 'large',
    'fontWeight': 500
  },
  button: {
    marginLeft: 5
  }
};

class ActionsBar extends React.Component {
  render() {
    const { classes } = this.props;

    // const headerColor = props.background;
    return (
      <div>
        <Card className={classes.card}>
          <Grid container spacing={0} >
            <Grid item xs={2} style={{ background: '#3f51b5', 'borderRadius': '4px'}}>
              <div className={classes.actionPanel}>
                Actions
              </div>
            </Grid>
            <Grid item xs={10} style={{marginTop: '5px'}}>
              <Button variant="contained" color="primary" className={classes.button}>
                Create SR
                <KeyboardArrowDown/>
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Create FCR
                <KeyboardArrowDown/>
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Genie Portal
                <KeyboardArrowDown/>
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                VAS Activation/Deactivations
                <KeyboardArrowDown/>
              </Button>
            </Grid>
          </Grid>
        </Card>
        <ActionsBarOptions checked={true}/>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionsBar);