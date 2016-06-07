import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Delete from './Delete'
import AddMessage from './AddMessage'

export default React.createClass({
  getInitialState(){
    return {
      username: '',
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
  getMessages(){
    $.get({
      url: this.props.messageSource,
      success: this.onSuccessfulGetMessages
    })
  },
  getCurrentUserName(){
    $.get({
      url: `${this.props.userSource}/${this.props.params._id}`,
      success: this.onSuccessfulGetCurrentUserName
    });
  },
  onSuccessfulGetMessages(resp){
    this.setState({
      messages: resp
    })
  },
  onSuccessfulGetCurrentUserName(resp){
    this.setState({
      username: resp.username,
      userId: resp._id
    })
  },
  componentDidMount(){
    this.getCurrentUserName();
    setInterval(()=> {
      this.getMessages();
    }, 2000)
  },
  handleChatDelete(e){
    var chatId = ReactDOM.findDOMNode(e.target).parentNode.dataset.id;
    $.ajax({
      url: `${this.props.messageSource}/${chatId}`,
      method: "DELETE",
      dataType: "JSON",
      success: (resp)=> {
        this.getMessages()
      }
    })
  },
  render() {
    return (
      <main>
        <h1 className="heading">Chat App</h1>
        <AddMessage getMessages={this.getMessages} hasUsername={this.state.username} hasUserId={this.state.userId}/>
        <section>
          <ul className="message__list">{this.state.messages.map((message)=> {
              return <li key={ message._id } className="message__item" data-id={ message._id }><h3>{message.username}</h3><p className="message__text">{message.chat}</p>
              <Delete handleChatDelete={this.handleChatDelete}/>
                </li>
            },this)}
          </ul>
        </section>
      </main>
    )
  }
})
