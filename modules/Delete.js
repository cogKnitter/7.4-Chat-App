import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'

export default React.createClass({
  render() {
    return (
        <i onClick={this.props.handleChatDelete} className="delete__chat"> - </i>
    );
  }
})
