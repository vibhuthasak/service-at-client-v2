import React, { Component } from 'react';
import PrimarySearchAppBar from '../../components/AppHeader';
import SearchBar from '../../components/SearchBar';
import SimpleTable from '../../components/EmailDisplay';
import ActionsBar from '../../components/ActionsBar';

class EmailView extends Component {
    render() {
      return (
        <div className="App">
          <PrimarySearchAppBar/>
          <SearchBar/>
          <ActionsBar/>
          <SimpleTable/>
        </div>
      );
    }
  }
  
  export default EmailView;