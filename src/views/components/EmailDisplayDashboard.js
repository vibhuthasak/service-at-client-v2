import React from 'react';
import PropTypes from 'prop-types';
import Portal from '@material-ui/core/Portal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    border: '1px solid',
    borderColor: theme.palette.text.primary,
  },
});

class SimplePortal extends React.Component {
  state = {
    show: false,
  };

  handleClick = () => {
    this.setState(state => ({ show: !state.show }));
  };

  render() {
    const { classes } = this.props;
    const { show } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
        <div className={classes.alert}>
          {show ? (
            <Portal container={this.container}>
              <EmailDisplayDashboardTable
                TimePeriod={this.props.TimePeriod}
                showEmailCategory={this.props.showEmailCategory}
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