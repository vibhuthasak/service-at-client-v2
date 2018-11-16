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

import NativeSelect from '@material-ui/core/NativeSelect';
import Add from '@material-ui/icons/Add';

import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

class ExpandPanelSummery extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      fullEmail: '',
      gotFullMail: false,
      feedbackCollapse: false,
      feedbackvalue: this.props.category
    }

    this.handleFeedbackChange = this.handleFeedbackChange.bind(this)
  }

  handleDownloadClick() {
    console.log('Download Clicked')
  }

  FeedbackClick() {
    this.setState({
      feedbackCollapse: !this.state.feedbackCollapse
    })
  }

  handleFullEmail = async () => {
    if(!this.state.gotFullMail) {
      const response = await fetch(`https://sira.dialog.lk/sat/api/getEmailBody?mailId=${this.props.id}`);
      const json = await response.json();
      console.log(json.content);
      await this.setState({
        fullEmail: json.content,
        gotFullMail: true
      });
    } else {
      await this.setState({
        fullEmail: '',
        gotFullMail: false
      });
    }
  }

  FeedbackSubmitClick() {
    alert('Submitted')
  }

  handleFeedbackChange (event) {
    // console.log(event.target.value)
    this.setState({ feedbackvalue: event.target.value });
  };

  feedbackComponent(fgiven, color) {
    const aiColor = this.props.style;
    const catList = ['Usage', 'Recharge Card Related', 'Genie', 'Billing', 'Activation/Deactivations', 'Undecided']
    const fSelect = catList.map((option) => <option key={option}>{option}</option>);

    return(
    <div>
      <Typography 
        variant="subtitle1" 
        color="textPrimary" 
        gutterBottom 
        style={{display: 'inline-block', color: color, marginRight:10}}> 
        {fgiven ? 'Feedback given' : 'Feedback not given'}
      </Typography>

      <Button
        variant="contained" 
        style={{padding: 5, borderRadius: 5, fontSize: 15, backgroundColor: color, color: 'white'}}
        onClick={this.FeedbackClick.bind(this)}>
        {fgiven ? 'Edit Feedback' : 'Add Feedback'}
        {fgiven ? <Edit/>: <AddCircle/>}
      </Button>

      <Grid item xs={12} style={{marginTop: 10}}>
        <Collapse in={this.state.feedbackCollapse}>
          <Paper elevation={1} style={{width: '90%'}}>
            <Typography
              variant="subtitle1"
              gutterBottom 
              style={{color: aiColor.color, marginLeft:10}}>
              Classified Category By AI : {this.props.category}
            </Typography>

            <Typography 
              variant="subtitle1"
              gutterBottom 
              style={{display: 'inline-block', marginLeft:10}}>
              Classified Category By User :
            </Typography>

            <NativeSelect
              style={{marginLeft: 5}}
              onChange={this.handleFeedbackChange}>
              {fSelect}
            </NativeSelect>

            <Button
              variant="contained" 
              style={{padding: 2, marginLeft: 5, borderRadius: 5, fontSize: 15, backgroundColor: '#00a152', color: 'white'}}
              onClick={this.FeedbackSubmitClick}
            > <Add />
            </Button>

          </Paper>
        </Collapse>
      </Grid>
    </div>)
  }

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

            <Grid item xs={12} style={{'whiteSpace': 'pre-wrap'}}>
              <Collapse in={this.state.gotFullMail}>
                {this.state.fullEmail}
              </Collapse>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

ExpandPanelSummery.propTypes = {
  // id={this.props.id} extended={this.state.expanded} attachments={this.props.attachments} feedback={this.props.feedback} category={this.props.category} style={this.props.style}
};

export default ExpandPanelSummery;