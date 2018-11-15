import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import Edit from '@material-ui/icons/Edit';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Email from '@material-ui/icons/Email';

class ExpandPanelSummery extends React.Component {

  render() {
    const fullEmailButtonColor = this.state.gotFullMail ? '#fdd835' : '#43a047'
    return (
      <Card style={{width: '100%'}}>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              {this.props.feedback ?
                this.feedbackComponent(true, '#43a047')
                :
                this.feedbackComponent(false, '#f44336')
              }
            </Grid>
            <Grid item xs={6}>
              { this.props.attachments ?
                <div>
                  <Typography 
                    variant="subtitle1" 
                    color="textPrimary" 
                    gutterBottom 
                    style={{display: 'inline-block', color: '#43a047', marginRight:10}}> 
                    Attachments Available
                  </Typography>
                  <Button 
                    variant="contained" 
                    style={{borderRadius: 5, fontSize: 15, backgroundColor: '#43a047', color: 'white', padding: 5}}
                    onClick={this.handleDownloadClick}>
                    Download
                    <CloudDownload style={{marginLeft: 5}}/>
                  </Button>
                </div> :                   
                  <Typography 
                    variant="subtitle1" 
                    color="textSecondary" 
                    gutterBottom 
                    style={{display: 'inline-block', marginRight:10}}> 
                    Attachments Not Available
                  </Typography>
              }
            </Grid>
          </Grid>
          <Grid container spacing={8} style={{marginTop: 10}}>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                style={{borderRadius: 5, fontSize: 15, backgroundColor: fullEmailButtonColor, color: 'white', padding: 5}}
                onClick={this.handleFullEmail.bind(this)}> 
                {this.state.gotFullMail ? 'Hide Full Email' : 'View Full Email' }
                <Email style={{marginLeft: 5}}/>
              </Button>
            </Grid>
            <Grid item xs={12} style={{'white-space': 'pre-wrap'}}>
              {this.state.fullEmail}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

ExpandPanelSummery.propTypes = {
  // id={this.props.id} extended={this.state.expanded} attachments={this.props.attachments} feedback={this.props.feedback}
};

export default ExpandPanelSummery;