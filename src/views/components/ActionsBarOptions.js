import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    height: 180,
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
    const { classes } = this.props;

    return (
      <div
        className={classes.root}
        style={{ display: this.props.checked ? "block" : "none" , backgroundColor: 'red'}}
      >
        <div className={classes.container}>
          <Paper elevation={4} className={classes.paper}>
          </Paper>
        </div>
      </div>
    );
  }
}

ActionsBarOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired
};

export default withStyles(styles)(ActionsBarOptions);
