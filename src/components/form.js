import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
class TrackingForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Report a problem with your delivery</h1>
        <form>
          <Field
            component={Input}
            element="input"
            type="text"
            id="tracking"
            name="tracking"
            label="Tracking Number"
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
            <option>My delivery hasn't arrived</option>
            <option>The wrong item was delivered</option>
            <option>Part of my order was missing</option>
            <option>Some of the order arrived damaged</option>
            <option>Other (give details below)</option>
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
  form: 'tracking'
})(TrackingForm);
