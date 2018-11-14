import React, { Component } from 'react';
import PrimarySearchAppBar from '../../components/AppHeader';
import SearchBar from '../../components/SearchBar';
import EmailDisplay from '../../components/EmailDisplay';
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
        <EmailDisplay rows={this.state.EmailList}/>
      </div>
    );
  }
}
  
  export default EmailView;