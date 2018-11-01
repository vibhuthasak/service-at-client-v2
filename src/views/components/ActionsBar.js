import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ActionsBarOptions from './ActionsBarOptions';

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
    'marginLeft': 20,
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
  constructor(props) {
    super(props)

    this.state = {
      DrawerOpen : false,
      buttonId: 0
    }
  }

  handleButtonClick(id) {
    this.setState({
      DrawerOpen: !this.state.DrawerOpen,
      buttonId: id
    })
  }

  render() {
    const { classes } = this.props;
    let a = [{id: 1}, {id: 2}, {id: 3}];
    let buttonNames = ['Create SR / FCR', 'Genie Portal', 'VAS Activation/Deactivations' ]
    const buttonList = []
    a.forEach((item, index)=>{
      buttonList.push(
      <Button key={item.id} variant="contained" color="primary" className={classes.button} onClick={this.handleButtonClick.bind(this, item.id)}>
        {buttonNames[index]}
        <KeyboardArrowDown/>
      </Button>)
    })
    // const headerColor = props.background;
    return (
      <div>
        <Card className={classes.card}>
          <Grid container spacing={8} >
            <Grid item xs={1} style={{ background: '#3f51b5', 'borderRadius': '4px'}}>
              <div className={classes.actionPanel}>
                Actions
              </div>
            </Grid>
            <Grid item xs={11} style={{marginTop: '5px'}}>
              {buttonList}
            </Grid>
          </Grid>
        </Card>
        <ActionsBarOptions checked={this.state.DrawerOpen} buttonId={this.state.buttonId}/>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionsBar);