import React from 'react'
import $ from 'jquery'
import Serialize from 'form-serialize'

export default React.createClass({
  getInitialState(){
    return {
      messages: [],
      users: []
    }
  },
  getDefaultProps(){
    return {
      messageSource:"https://tiny-tiny.herokuapp.com/collections/mariah_chat",
      userSource: "https://tiny-tiny.herokuapp.com/collections/mariah_chat_users"
    }
  },
  handleSubmitMessage(e){
    e.preventDefault();
    var serializedForm = Serialize(this.refs.chatForm, {hash: true})
    $.post(this.props.messageSource, serializedForm, (resp)=> {
      this.props.getMessages(),
      this.refs.input.value= "";
    })
  },
  render () {
    return (
      <section>
        <form className="message__form" method="POST" ref="chatForm" action="#" onSubmit={this.handleSubmitMessage}>
          <input className="message__entry" type="text" name="chat" ref="input" placeholder="type your message here"/>
          <input type="hidden" name="username" value={this.props.hasUsername} />
          <input type="hidden" name="userId" value={this.props.hasUserId} />
        </form>
      </section>
    );
  }
})
