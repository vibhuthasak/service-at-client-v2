import React, { Component } from 'react';
import PrimarySearchAppBar from '../../components/AppHeader';
import SearchBar from '../../components/SearchBar';
import SimpleTable from '../../components/EmailDisplay';

class EmailView extends Component {
    render() {
      return (
        <div className="App">
          <PrimarySearchAppBar/>
          <SearchBar/>
          <SimpleTable/>
        </div>
      );
    }
  }
  
  export default EmailView;