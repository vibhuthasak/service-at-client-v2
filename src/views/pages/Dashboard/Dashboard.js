import React, { Component } from 'react';
// import '.../App.css';
import PrimarySearchAppBar from '../../components/AppHeader';
import CardsGrid from '../../components/CardsGrid';
import NavigationTime from '../../components/NavigationTime';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      TimePeriod: 0,
      TotalMails: 0,
      TotalCorrect: 0,
      UsageMails: 0,
      UsageCorrect: 0,
      RechargeMails: 0,
      RechargeCorrect: 0,
      GenieMails: 0,
      GenieCorrect: 0,
      BillingMails: 0,
      BillingCorrect: 0,
      VasMails: 0,
      VasCorrect: 0,
      OtherMails: 0,
      OtherCorrect: 0,
    }
  }
  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar/>
        <NavigationTime/>
        <CardsGrid formData={this.state}/>
      </div>
    );
  }
  }
  
  export default Dashboard;