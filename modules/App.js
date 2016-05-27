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
      source:"http://tiny-tiny.herokuapp.com/collections/mariah_chat"
    }
  },
  componentDidMount(){
    $.get(this.props.source, (resp)=> {
      this.setState({ messages: resp})
      console.log(resp);
    })
  },
  handleSubmitMessage(e){
    e.preventDefault();
    var serializedForm = Serialize(this.refs.chatForm, {hash: true})
    $.post(this.props.source, serializedForm, (resp)=> {
      $.get(this.props.source, (resp)=> {
        this.setState({ messages: resp})
      })
    })
  },
  handleChatDelete(e){
    var chatId = $(e.target).parent().data("id");
    $.ajax({
      url: `${this.props.source}/${chatId}`,
      method: "DELETE",
      dataType: "JSON",
      success: (resp)=> {
        $.get(this.props.source, (resp)=> {
          this.setState({ messages: resp})
        })
      },
      timeout: 2000
    })
  },
  render() {
    return (
      <main>
        <section>
          <h1 className="heading">Chat App</h1>
          <form className="message__form" method="POST" ref="chatForm" action="#" onSubmit={this.handleSubmitMessage}>
            <input className="message__entry" type="text" name="chat" placeholder="type your message here"/>
          </form>
        </section>
        <section>
          <ul className="message__list">{this.state.messages.map((message)=> {
              return <li key={ message._id } className="message__item" data-id={ message._id }>{message.chat}
                <i onClick={this.handleChatDelete} className="fa fa-minus-square-o"></i>
                </li>
            },this)}
          </ul>
        </section>
      </main>
    )
  }
})
