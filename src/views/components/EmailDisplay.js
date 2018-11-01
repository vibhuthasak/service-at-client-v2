import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    }
});

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
            <TableCell className={classes.tableHeaderCell} style={{ width: '65%' }}> Message </TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ width: '10%' }}>  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id} style={{borderRadius: 4}}>
                <TableCell component="th" scope="row" className={classes.tableDataCell}>
                  {row.date}
                </TableCell>
                <TableCell numeric className={classes.tableDataCell}>{row.subject}</TableCell>
                <TableCell numeric className={classes.tableDataCell}>{row.message}</TableCell>
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