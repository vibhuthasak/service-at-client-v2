import React, { Component } from 'react';
// import '.../App.css';
import PrimarySearchAppBar from '../../components/AppHeader';
import CardsGrid from '../../components/CardsGrid';
import NavigationTime from '../../components/NavigationTime';

class Dashboard extends Component {
    render() {
      return (
        <div className="App">
          <PrimarySearchAppBar/>
          <NavigationTime/>
          <CardsGrid/>
        </div>
      );
    }
  }
  
  export default Dashboard;