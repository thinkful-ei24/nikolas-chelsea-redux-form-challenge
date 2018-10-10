import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Report a problem with your delivery</h1>
        <form>
          <label htmlFor="tracking">Tracking Number</label>
          <input type="text" id="tracking" />
          <br />
          <br />
          <label htmlFor="issue">What is your issue?</label>
          <select type="select" id="issue">
            <option>My delivery hasn't arrived</option>
            <option>The wrong item was delivered</option>
            <option>Part of my order was missing</option>
            <option>Some of the order arrived damaged</option>
            <option>Other (give details below)</option>
          </select>
          <br />
          <br />
          <label htmlFor="details">Give more details (optional)</label>
          <textarea type="text" />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </React.Fragment>
    );
  }
}
