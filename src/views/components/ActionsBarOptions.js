import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ActionTextFieldsCreateSr from './ActionTextFieldsCreateSr';

const styles = theme => ({
  root: {
    // height: 180,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },
  container: {
    display: "flex"
  },
  paper: {
    margin: theme.spacing.unit
  }
});

class ActionsBarOptions extends React.Component {

  render() {
    const { classes, checked, buttonId } = this.props;
    let textFields;
    if(checked && buttonId > 0) {
      if (buttonId === 1) {
        const textFieldList = ['Reference No', 'Description', 'Line of Bussiness', 'Sub Area', 'Sub Sub Area', 'SR Type', 'Contact Number', 'Source']
        textFields = <ActionTextFieldsCreateSr textFieldList={textFieldList}/>
      } else if (buttonId === 2) {
        textFields = ''
      } else if (buttonId === 3) {
        textFields = ''
      }
      
    }
    return (
      <div
        className={classes.root}
        style={{ display: checked ? "block" : "none" , backgroundColor: '#BBDEFB'}}
      >
        <div className={classes.container}>
          <Paper elevation={4} className={classes.paper}>
            {textFields}
          </Paper>
        </div>
      </div>
    );
  }
}

ActionsBarOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  buttonId: PropTypes.number.isRequired
};

export default withStyles(styles)(ActionsBarOptions);
