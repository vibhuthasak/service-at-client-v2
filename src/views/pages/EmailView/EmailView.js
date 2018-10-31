import React, { Component } from 'react';
import PrimarySearchAppBar from '../../components/AppHeader';
import SearchBar from '../../components/SearchBar';

class EmailView extends Component {
    render() {
      return (
        <div className="App">
          <PrimarySearchAppBar/>
          <SearchBar/>
        </div>
      );
    }
  }
  
  export default EmailView;