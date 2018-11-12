import React from "react";
import PropTypes from "prop-types";
import Portal from "@material-ui/core/Portal";
import { withStyles } from "@material-ui/core/styles";
import EmailDisplayDashboardTable from "./EmailDisplayDashboardTable";

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`
  }
});

class EmailDisplayContainer extends React.Component {
  render() {
    const { classes, EmailDisplayDashboard } = this.props;
    return (
      <div>
        <div>
          {EmailDisplayDashboard ? (
            <Portal container={this.container}>
              <EmailDisplayDashboardTable
                TimePeriod={this.props.TimePeriod}
                showEmailCategory={this.props.showEmailCategory}
              />
            </Portal>
          ) : null}
        </div>
        <div
          className={classes.alert}
          ref={ref => {
            this.container = ref;
          }}
        />
      </div>
    );
  }
}

EmailDisplayContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  EmailDisplayDashboard: PropTypes.bool,
  TimePeriod: PropTypes.number,
  showEmailCategory: PropTypes.string
};

export default withStyles(styles)(EmailDisplayContainer);