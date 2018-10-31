import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 275,
    height: 50,
    background: 'rgb(0, 176, 255)',
    marginTop: 16,
    marginLeft: 10,
    marginRight: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
  }
};

function ActionsBar(props) {
  const { classes } = props;

  // const headerColor = props.background;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={0} >
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  totalMails: PropTypes.number.isRequired,
  totalClassfied: PropTypes.number.isRequired,
};

export default withStyles(styles)(ActionsBar);