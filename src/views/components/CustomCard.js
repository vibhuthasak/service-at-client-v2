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

class CustomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleToggle= this.handleToggle.bind(this);
  }

  async handleToggle() {
    const currentState = this.state.show;
    await this.setState({ show: !currentState });
    const output = {
      state: this.state.show,
      category: this.props.title
    }
    this.props.displayEmails(output);
  }

  render() {
    const { classes } = this.props;
    const title = this.props.title;
    const style = {
      background: this.props.background,
    };
    const buttonStatus = ((this.props.ActiveTitle !== title) && this.props.EmailActivated)
    return (
      <Card className={classes.card}>
        <CardHeader title={title} style={style} titleTypographyProps={{"style" : {fontSize:"larger"}}} subheaderTypographyProps={{"style" : {fontSize:"larger"}}} subheader={`${((this.props.totalMails/this.props.totalFullmails)*100).toPrecision(4)}%`}/>
        <CardContent>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell style={{'paddingLeft' : '0', 'paddingRight' : '0'}}>Number of Emails Recieved</TableCell>
                <TableCell> {this.props.totalMails} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{'paddingLeft' : '0', 'paddingRight' : '0'}}>Number of Correctly Classified Emails</TableCell>
                <TableCell> {this.props.totalClassfied} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{'paddingLeft' : '0', 'paddingRight' : '0'}}>Accuracy</TableCell>
                <TableCell>{((this.props.totalClassfied/this.props.totalMails)*100).toPrecision(4)}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <Button disabled={buttonStatus} size="small" variant="outlined" color="secondary" onClick={this.handleToggle}>{(this.state.show && this.props.EmailActivated) ? 'Hide Mails' : 'Show Emails'}</Button>
        </CardActions>
      </Card>
    );
  }
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  totalMails: PropTypes.number.isRequired,
  totalClassfied: PropTypes.number.isRequired,
  totalFullmails: PropTypes.number.isRequired,
  displayEmails: PropTypes.func,
  ActiveTitle: PropTypes.string,
  EmailActivated: PropTypes.bool
};

export default withStyles(styles)(CustomCard);
