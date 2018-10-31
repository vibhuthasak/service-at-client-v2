import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//Import Pages
import { Login, Dashboard, EmailView, UserProfile } from './views/pages';
// import Dashboard from './views/pages/Dashboard';
// import Login from './views/pages/Login';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <PrimarySearchAppBar/>
//         <NavigationTime/>
//         <CardsGrid/>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/emails" name="Home" component={EmailView} />
          <Route exact path="/profile" name="Home" component={UserProfile} />
          <Route exact path="/" name="Home" component={Dashboard} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;