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
    marginTop: theme.spacing.unit * 3,
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

let id = 0;
function createData(name, calories, fat) {
  id += 1;
  return {id, name, calories, fat};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

function EmailDisplay(props) {
  const { classes } = props;

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
                  {row.name}
                </TableCell>
                <TableCell numeric className={classes.tableDataCell}>{row.calories}</TableCell>
                <TableCell numeric className={classes.tableDataCell}>{row.fat}</TableCell>
                <TableCell numeric className={classes.tableDataCell}>{row.carbs}</TableCell>
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