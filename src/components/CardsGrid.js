import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomCard from './CustomCard';
import CustomCard2 from './CustomCardTotal';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CardsGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{marginTop: '10px', marginLeft: '8px', marginRight: '8px'}}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
            <CustomCard2 title={'Usage'} background={'#33bfff'} totalMails={322} totalClassfied={121}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Usage'} background={'#43a047'} totalMails={3322} totalClassfied={21}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Recharge Card Related'} background={'#ff7da8'} totalMails={3122} totalClassfied={1321}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Genie'} background={'#ff3d00'} totalMails={3212} totalClassfied={2121}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Billing'} background={'#ff9800'} totalMails={3422} totalClassfied={3321}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'VAS Related'} background={'#d500f9'} totalMails={3122} totalClassfied={121}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Undecided'} background={'#9e9e9e'} totalMails={3122} totalClassfied={521}/>
        </Grid>
      </Grid>
    </div>
  );
}

CardsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardsGrid);