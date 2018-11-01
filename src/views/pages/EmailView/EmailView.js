import React, { Component } from 'react';
import PrimarySearchAppBar from '../../components/AppHeader';
import SearchBar from '../../components/SearchBar';
import SimpleTable from '../../components/EmailDisplay';
import ActionsBar from '../../components/ActionsBar';

class EmailView extends Component {
  constructor(props){
    super(props)

    this.state = {
      EmailList : []
    }

    this.handleEmailListChange = this.handleEmailListChange.bind(this); 
  }

  handleEmailListChange(values) {
    this.setState({
      EmailList: values 
    });
  }

  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar/>
        <SearchBar handleEmailChange={this.handleEmailListChange}/>
        <ActionsBar/>
        <SimpleTable rows={this.state.EmailList}/>
      </div>
    );
  }
}
  
  export default EmailView;