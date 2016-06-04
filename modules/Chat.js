import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Serialize from 'form-serialize'

export default React.createClass({
  getInitialState(){
    return {
      users: [],
      messages: []
    }
  },
  getDefaultProps(){
    return {
      usersSource: "http://tiny-tiny.herokuapp.com/collections/mariah_chat_users",
      source:"http://tiny-tiny.herokuapp.com/collections/mariah_chat"
    }
  },
  getMessages(){
    $.get(this.props.source, (resp)=> {
      this.setState({ messages: resp})
    })
  },
  componentDidMount(){
    setInterval(()=> {
      $.get(this.props.source, (resp)=> {
        this.setState({ messages: resp})
        console.log(resp);
      })
    }, 2000)
  },
  handleSubmitMessage(e){
    e.preventDefault();
    var serializedForm = Serialize(this.refs.chatForm, {hash: true})
    $.post(this.props.source, serializedForm, (resp)=> {
      this.getMessages
      this.refs.input.value= "";
    })
  },
  handleChatDelete(e){
    var chatId = ReactDOM.findDOMNode(e.target).parentNode.dataset.id;
    $.ajax({
      url: `${this.props.source}/${chatId}`,
      method: "DELETE",
      dataType: "JSON",
      success: (resp)=> {
        this.getMessages
      }
    })
  },
  render() {
    return (
      <main>
        <section>
          <form className="message__form" method="POST" ref="chatForm" action="#" onSubmit={this.handleSubmitMessage}>
            <input className="message__entry" type="text" name="chat" ref="input" placeholder="type your message here"/>
          </form>
        </section>
        <section>
          <ul className="message__list">{this.state.messages.map((message)=> {
              return <li key={ message._id } className="message__item" data-id={ message._id }><h3>Username</h3><p className="message__text">{message.chat}</p>
                <i onClick={this.handleChatDelete} className="fa fa-minus-square-o"></i>
                </li>
            },this)}
          </ul>
        </section>
      </main>
    )
  }
})
