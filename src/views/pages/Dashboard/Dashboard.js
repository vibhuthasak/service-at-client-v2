import React, { Component } from "react";
import PrimarySearchAppBar from "../../components/AppHeader";
import CardsGrid from "../../components/CardsGrid";
import NavigationTime from "../../components/NavigationTime";
import EmailDisplayDashboard from "../../components/EmailDisplayDashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
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
      showEmailTable: false,
      showEmailCategory: null
    };
  }

  displayEmailTable = value => {
    this.setState({
      showEmailTable: value.state,
      showEmailCategory: value.category
    });
  };

  handleForChangeValues = values => {
    this.setState({
      TimePeriod: values.TimePeriod,
      TotalMails: values.TotalMails,
      TotalCorrect: values.TotalCorrect,
      UsageMails: values.TotalUsage,
      UsageCorrect: values.CorrectUsage,
      RechargeMails: values.TotalRechargeCard,
      RechargeCorrect: values.CorrectRechargeCard,
      GenieMails: values.TotalGenie,
      GenieCorrect: values.CorrectGenie,
      BillingMails: values.TotalBilling,
      BillingCorrect: values.CorrectBilling,
      VasMails: values.TotalActDeact,
      VasCorrect: values.CorrectActDeact,
      OtherMails: values.TotalUndecided,
      OtherCorrect: values.CorrectUndecided,
      showEmailTable: false,
      showEmailCategory: null
    });
  };

  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar />
        <NavigationTime handleForChangeValues={this.handleForChangeValues} />
        <CardsGrid
          formData={this.state}
          displayEmailTable={this.displayEmailTable}
          ActiveTitle={this.state.showEmailCategory}
          EmailActivated={this.state.showEmailTable}
        />
        <EmailDisplayDashboard
          EmailDisplayDashboard={this.state.showEmailTable}
          TimePeriod={this.state.TimePeriod}
          showEmailCategory={this.state.showEmailCategory}
        />
      </div>
    );
  }
}

export default Dashboard;
