import React from 'react'
import $ from 'jquery'
import Serialize from 'form-serialize'

export default React.createClass({
  getInitialState(){
    return {
      messages: []
    }
  },
  getDefaultProps(){
    return {
      source:"https://tiny-tiny.herokuapp.com/collections/mariah_chat"
    }
  },
  handleSubmitMessage(e){
    e.preventDefault();
    var serializedForm = Serialize(this.refs.chatForm, {hash: true})
    $.post(this.props.source, serializedForm, (resp)=> {
      this.props.getMessages(),
      this.refs.input.value= "";
    })
  },
  render () {
    return (
      <section>
        <form className="message__form" method="POST" ref="chatForm" action="#" onSubmit={this.handleSubmitMessage}>
          <input className="message__entry" type="text" name="chat" ref="input" placeholder="type your message here"/>
        </form>
      </section>
    );
  }
})
