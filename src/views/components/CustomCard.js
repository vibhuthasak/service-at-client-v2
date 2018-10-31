import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import CardHeader from "@material-ui/core/CardHeader";

const styles = {
  card: {
    minWidth: 275
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
    marginBottom: 12
  },
  // Cardheader : {}
};

function CustomCard(props) {
  const { classes } = props;
  const title = props.title;
  const style = {
    background: props.background,
  };
  // const headerColor = props.background;
  return (
    <Card className={classes.card}>
      <CardHeader title={title} style={style} titleTypographyProps={{"style" : {fontSize:"larger"}}}/>
      <CardContent>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell style={{'paddingLeft' : '0', 'paddingRight' : '0'}}># of Emails Recieved</TableCell>
              <TableCell> {props.totalMails} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{'paddingLeft' : '0', 'paddingRight' : '0'}}># of Correctly Classified Emails</TableCell>
              <TableCell> {props.totalClassfied} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{'paddingLeft' : '0', 'paddingRight' : '0'}}>Accuracy</TableCell>
              <TableCell>{((props.totalClassfied/props.totalMails)*100).toPrecision(4)}%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions>
        <Button size="small">List Emails</Button>
      </CardActions>
    </Card>
  );
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  totalMails: PropTypes.number.isRequired,
  totalClassfied: PropTypes.number.isRequired
};

export default withStyles(styles)(CustomCard);
