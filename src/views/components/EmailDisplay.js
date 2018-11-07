import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Attachment from '@material-ui/icons/Attachment';
import Mail from '@material-ui/icons/Mail'
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
    marginLeft: 10,
    marginRight: 10
  },
  table: {
    minWidth: 700
  },
  tableHead : {
    background: '#3f51b5'
  },
  tableDataCell:{
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    textAlign: 'left',
    marginLeft: 0
  },
  tableHeaderCell:{
      textAlign: 'center', 
      color: 'white', 
      'fontSize': 'medium'
  },
  button: {
    marginLeft: 5,
    padding: 0
  },
  chip: {
    margin: theme.spacing.unit,
  }
});

function convertFromHex(hex) { 
  hex = hex.toString();
  var str = '';
  for (var i = 0; i < hex.length; i += 2) 
  str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)); 
  return str; 
}

function colorTheme(category){
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

function GetCategory(category){
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

function getLocalDate(utcDate){
  let date = new Date(utcDate);
  return (String(date).slice(0,-31))
}

function EmailDisplay(props) {
  const { classes, rows } = props;
  // const { rows } = props.emailList;
  return (
    <Paper className={classes.root}>
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
          {rows.map(row => {
            let style = {borderRadius: 4, background:colorTheme(row.categorybyscript)}
            let optionsCell = ''
            let chip = <Chip label={GetCategory(row.categorybyscript)} color="primary" className={classes.chip} />
            if(row.hasAttachment === 'true'){
              optionsCell = <IconButton color="primary" className={classes.button} aria-label="Attachment"> <Attachment /> </IconButton>
            }
            let fullMail = <IconButton color="primary" className={classes.button} aria-label="Full Mail"> <Mail/> </IconButton>
            return (
              <TableRow key={row.mail_id} style={style}>
                <TableCell component="th" scope="row" className={classes.tableDataCell}>{getLocalDate(row.recievedTime)}</TableCell>
                <TableCell numeric className={classes.tableDataCell}>{convertFromHex(row.subject)}</TableCell>
                <TableCell numeric className={classes.tableDataCell}>{convertFromHex(row.bodypreview)}</TableCell>
                <TableCell numeric className={classes.tableDataCell}>{optionsCell}{fullMail}</TableCell>
                <TableCell numeric className={classes.tableDataCell}>{chip}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

EmailDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailDisplay);