import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 275,
    height: 50
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

function CustomCard(props) {
  const { classes } = props;
  const style = {
    background: props.background
  };
  const valueStyle = {
    color:'white', 
    marginLeft: 8, 
    backgroundColor: '#1c54b2', 
    paddingTop: '100%', 
    paddingBottom: 34,
    paddingLeft: 15, 
    paddingRight: 15
  };

  // const headerColor = props.background;
  return (
    <Card className={classes.card}>
      <CardContent style={style}>
        <Grid container spacing={0} >
          <Grid item xs={3}>
            <span style={{'color':'black', 'fontSize': 'smaller'}}>Total Number of Emails Recieved : </span>
            <span style={valueStyle}>{props.totalMails}</span>
          </Grid>
          <Grid item xs={3}>
            <span style={{'color':'black', 'fontSize': 'smaller'}}>Number of Correctly Classified Emails : </span>
            <span style={valueStyle}>{props.totalClassfied}</span>
          </Grid>
          <Grid item xs={3} style={{paddingLeft:'4%'}}>
            <span style={{'color':'black', 'fontSize': 'smaller'}}>Classifier Accuracy : </span>
            <span style={valueStyle}>{((props.totalClassfied/props.totalMails)*100).toPrecision(4)}%</span>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="small">List Emails</Button>
      </CardActions> */}
    </Card>
  );
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  totalMails: PropTypes.number.isRequired,
  totalClassfied: PropTypes.number.isRequired,
};

export default withStyles(styles)(CustomCard);
