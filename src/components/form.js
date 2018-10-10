import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./input";
import { required, nonEmpty, checkChar, checkLength } from "./validators";
import { trackingActionAsync } from "../actions/";

class TrackingForm extends Component {
	render() {
		if (this.props.submitSucceeded) {
			return (
				<React.Fragment>
					<img
						alt="rick"
						src="https://gifimage.net/wp-content/uploads/2017/06/rick-roll-gif-4.gif"
					/>
					<h1>I love you, it worked</h1>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<h1>Report a problem with your delivery</h1>
				<form
					onSubmit={this.props.handleSubmit(values => {
						console.log(values);
						return this.props.dispatch(trackingActionAsync(values));
					})}
				>
					{/* {this.props.error && <h3>{this.props.error}</h3>} */}
					<Field
						component={Input}
						element="input"
						type="text"
						id="trackingNumber"
						name="trackingNumber"
						label="Tracking Number"
						validate={[required, nonEmpty, checkChar, checkLength]}
					/>
					<br />
					<br />
					<Field
						component={Input}
						element="select"
						type="select"
						id="issue"
						name="issue"
						label="What is your issue?"
					>
						<option value="not-delivered">My delivery hasn't arrived</option>
						<option value="wrong-item">The wrong item was delivered</option>
						<option value="missing-part">Part of my order was missing</option>
						<option value="damaged">Some of the order arrived damaged</option>
						<option value="other">Other (give details below)</option>
					</Field>
					<br />
					<br />
					<Field
						component={Input}
						element="textarea"
						type="text"
						id="details"
						name="details"
						label="Give more details (optional)"
					/>
					<br />
					<br />
					<button>Submit</button>
				</form>
			</React.Fragment>
		);
	}
}

export default reduxForm({
	form: "tracking",
	initialValues: {
		issue: "not-delivered"
	}
})(TrackingForm);
