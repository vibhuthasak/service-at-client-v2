import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableHead from "@material-ui/core/TableHead";
import Chip from '@material-ui/core/Chip';
import Attachment from '@material-ui/icons/Attachment';
import Mail from '@material-ui/icons/Mail'

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  },
  tableHeaderCell:{
      textAlign: 'center', 
      color: 'white', 
      'fontSize': 'medium'
  },
  tableHead : {
    background: '#3f51b5'
  },
  tableDataCell:{
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    textAlign: 'left',
    marginLeft: 0
  },
});

class CustomPaginationActionsTable extends React.Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 5
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  async getData () {
    var url =
    "https://sira.dialog.lk/sat/api/getCategoryEmails?timePeriod=" +
    this.props.TimePeriod +
    "&category=" +
    this.props.showEmailCategory.trim();
    fetch(url)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }
          // Examine the text in the response
          response.json().then(
            function(data) {
              if(this._isMount){
                this.setState({
                  rows: data
                });
              }
            }.bind(this)
          );
        }.bind(this)
      )
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }

  componentDidMount() {
    this._isMount = true;
    this.getData()
  }

  componentDidUpdate() {
    this.getData()
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  getLocalDate(utcDate){
    let date = new Date(utcDate);
    return (String(date).slice(0,-31))
  }

  convertFromHex(hex) { 
    hex = hex.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2) 
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)); 
    return str; 
  }

  GetCategory(category){
    if(category === 'Usage') {
      return 'Usage'
    } else if(category === 'RechargeCard') {
      return 'Recharge Card'
    } else if(category === 'Genie') {
      return 'Genie'
    } else if(category === 'Billing') {
      return 'Billing'
    } else if(category === 'ActDeact') {
      return 'Activations / Deactivations'
    } else {
      return 'Undecided'
    }
  }

  colorTheme(category){
    if(category === 'Usage') {
      return 'rgb(67,160,71,0.4)'
    } else if(category === 'RechargeCard') {
      return 'rgb(255,125,168,0.4)'
    } else if(category === 'Genie') {
      return 'rgb(255,61,0,0.4)'
    } else if(category === 'Billing') {
      return 'rgb(255,152,0,0.4)'
    } else if(category === 'ActDeact') {
      return 'rgb(213,0,249,0.4)'
    } else {
      return 'rgb(158,158,158,0.4)'
    }
  }

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableHeaderCell} style={{ width: '10%' }}> Date/Time </TableCell>
                <TableCell className={classes.tableHeaderCell} style={{ width: '15%' }}> Subject </TableCell>
                <TableCell className={classes.tableHeaderCell} style={{ width: '55%' }}> Message </TableCell>
                <TableCell className={classes.tableHeaderCell} style={{ width: '10%' }}> Options </TableCell>
                <TableCell className={classes.tableHeaderCell} style={{ width: '10%' }}> Predicted Category </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  let style = {borderRadius: 4, background:this.colorTheme(row.categorybyscript)}
                  let optionsCell = ''
                  if(row.hasAttachment === 'true'){
                    optionsCell = <IconButton color="primary" className={classes.button} aria-label="Attachment"> <Attachment /> </IconButton>
                  }
                  let fullMail = <IconButton color="primary" className={classes.button} aria-label="Full Mail"> <Mail/> </IconButton>      
                  let chip = <Chip label={this.GetCategory(row.categorybyscript)} color="primary" className={classes.chip} />
                  return (
                    <TableRow key={row.mail_id} style={style}>
                      <TableCell component="th" scope="row" className={classes.tableDataCell}>{this.getLocalDate(row.recievedTime)}</TableCell>
                      <TableCell numeric className={classes.tableDataCell}>{this.convertFromHex(row.subject)}</TableCell>
                      <TableCell numeric className={classes.tableDataCell}>{this.convertFromHex(row.bodypreview)}</TableCell>
                      <TableCell numeric className={classes.tableDataCell}>{optionsCell}{fullMail}</TableCell>
                      <TableCell numeric className={classes.tableDataCell}>{chip}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  TimePeriod: PropTypes.number,
  showEmailCategory: PropTypes.string
};

export default withStyles(styles)(CustomPaginationActionsTable);
