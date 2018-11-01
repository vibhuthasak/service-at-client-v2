import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: "flex",
		flexWrap: "wrap",
		background: '#E3F2FD',
		borderRadius: 5,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
	},
	button: {
		margin: theme.spacing.unit,
		background: '#90CAF9',
		marginTop: 30
  }
});

class ActionTextFieldsCreateSr extends React.Component {
  render() {
    const { classes, textFieldList } = this.props;
		const textFieldItems = []
		textFieldList.forEach((item, index) => {
			textFieldItems.push(
			<TextField
				key={index}
				required
				id={`${index}`}
				label={item}
				className={classes.textField}
				margin="normal"
			/>)
		})
		textFieldItems.push(
			<Button key={textFieldItems.length + 1} size="small" className={classes.button}>Create SR</Button>
		)
		textFieldItems.push(
			<Button key={textFieldItems.length + 2} size="small" className={classes.button}>Create FCR</Button>
		)
    return (
      <form className={classes.container} autoComplete="off">
				{textFieldItems}
      </form>
    );
  }
}

ActionTextFieldsCreateSr.propTypes = {
	classes: PropTypes.object.isRequired,
	textFieldList: PropTypes.array
};

export default withStyles(styles)(ActionTextFieldsCreateSr);
