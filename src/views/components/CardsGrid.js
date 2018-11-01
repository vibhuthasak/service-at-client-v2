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
  const { classes, formData } = props;

  return (
    <div className={classes.root} style={{marginTop: '10px', marginLeft: '8px', marginRight: '8px'}}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
            <CustomCard2 title={'Total'} background={'#33bfff'} totalMails={formData.TotalMails} totalClassfied={formData.TotalCorrect}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Usage'} background={'#43a047'} totalMails={formData.UsageMails} totalClassfied={formData.UsageCorrect}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Recharge Card Related'} background={'#ff7da8'} totalMails={formData.RechargeMails} totalClassfied={formData.RechargeCorrect}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Genie'} background={'#ff3d00'} totalMails={formData.GenieMails} totalClassfied={formData.GenieCorrect}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Billing'} background={'#ff9800'} totalMails={formData.BillingMails} totalClassfied={formData.BillingCorrect}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'VAS Related'} background={'#d500f9'} totalMails={formData.VasMails} totalClassfied={formData.VasCorrect}/>
        </Grid>
        <Grid item xs={3}>
          <CustomCard title={'Undecided'} background={'#9e9e9e'} totalMails={formData.OtherMails} totalClassfied={formData.OtherCorrect}/>
        </Grid>
      </Grid>
    </div>
  );
}

CardsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired
};

export default withStyles(styles)(CardsGrid);