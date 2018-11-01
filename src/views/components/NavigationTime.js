import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import "../App.css";

const styles = {
  root2: {
    width: 500,
    height: 35,
    marginTop: 80,
    marginLeft: 8
  },
  selected: {
    background: "rgb(51, 191, 255)",
    borderRadius: 4,
    color: 'white'
  }
};

class NavigationTime extends React.Component {
  state = {
    value: 0
  };

  handleChange = async (event, value) => {
    await this.setState({ value });
    let emailFileName = `emailData.${this.state.value}.json`;
    console.log(emailFileName);
    fetch(emailFileName)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          data['TimePeriod'] = this.state.value;
          this.props.handleForChangeValues(data)
        }.bind(this));
      }.bind(this)
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  };

  componentDidMount() {
    let emailFileName = `emailData.${this.state.value}.json`;
    fetch(emailFileName)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          data['TimePeriod'] = this.state.value;
          this.props.handleForChangeValues(data)
        }.bind(this));
      }.bind(this)
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root2}
      >
        <BottomNavigationAction
          selected
          label="Today"
          disableTouchRipple={true}
          classes={{ selected: classes.selected }}
        />
        <BottomNavigationAction
          selected
          label="Yesterday"
          disableTouchRipple={true}
          classes={{ selected: classes.selected }}
        />
        <BottomNavigationAction
          selected
          label="This Month"
          disableTouchRipple={true}
          classes={{ selected: classes.selected }}
        />
        <BottomNavigationAction
          selected
          label="Last Month"
          disableTouchRipple={true}
          classes={{ selected: classes.selected }}
        />
      </BottomNavigation>
    );
  }
}

NavigationTime.propTypes = {
  classes: PropTypes.object.isRequired,
  handleForChangeValues: PropTypes.func.isRequired
};

export default withStyles(styles)(NavigationTime);
