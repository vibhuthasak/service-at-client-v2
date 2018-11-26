import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Label from '@material-ui/icons/Label';
import Feedback from '@material-ui/icons/Feedback'
import Attachment from '@material-ui/icons/Attachment'
import ExpandPanelSummery from './ExpandPanelSummery';

const styles = theme => ({
  root: {
    width: '100%',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  summeryClass: {
    paddingTop: 0,
    paddingBottom: 8
  }
});

class ExpandPanel extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <ExpansionPanel style={{background: '#E3F2FD'}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary style={{margin: 0}} expandIcon={<ExpandMoreIcon />}>
          <Grid container spacing={16}>
            <Grid item xs={1}>
              <Label fontSize="small" style={this.props.style}/>
              <Typography className={classes.heading}>{this.props.dateTime}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography className={classes.heading}>{this.props.subject}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.heading}>{this.props.sender}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.heading}>{this.props.preview}</Typography>
            </Grid>
            <Grid item xs={1}>
              {this.props.feedback ? <Feedback style={{color: "#357a38"}}/> : <Feedback style={{color: "#f44336"}}/>}
              {this.props.attachments ? <Attachment style={{color: "#357a38", marginLeft: 5}}/> : ''}
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.summeryClass}>
          <ExpandPanelSummery 
            id={this.props.id} 
            extended={this.state.expanded} 
            attachments={this.props.attachments} 
            feedback={this.props.feedback} 
            category={this.props.category} 
            style={this.props.style} 
            uniqueId={this.props.uniqueId}
            feedbackCategory={this.props.feedbackCategory}
            feedbackColor={this.props.feedbackColor}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

ExpandPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  dateTime: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  attachments: PropTypes.bool.isRequired,
  feedback: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  style: PropTypes.object,
  uniqueId: PropTypes.number.isRequired,
  feedbackCategory: PropTypes.string,
  feedbackColor: PropTypes.object
};

export default withStyles(styles)(ExpandPanel);