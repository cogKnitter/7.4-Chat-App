import React from 'react'

export default React.createClass({
  render () {
    return (
      <section>
        <form className="message__form" method="POST" ref="chatForm" action="#" onSubmit={this.props.handleSubmitMessage}>
          <input className="message__entry" type="text" name="chat" ref="input" placeholder="type your message here"/>
        </form>
      </section>
    );
  }
})
