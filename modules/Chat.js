import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Delete from './Delete'
import AddMessage from './AddMessage'

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
  getMessages(){
    $.get(this.props.source, (resp)=> {
      this.setState({ messages: resp})
    })
  },
  componentDidMount(){
    setInterval(()=> {
      this.getMessages()
    }, 2000)
  },
  handleChatDelete(e){
    var chatId = ReactDOM.findDOMNode(e.target).parentNode.dataset.id;
    $.ajax({
      url: `${this.props.source}/${chatId}`,
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
        <AddMessage getMessages={this.getMessages}/>
        <section>
          <ul className="message__list">{this.state.messages.map((message)=> {
              return <li key={ message._id } className="message__item" data-id={ message._id }><h3>Username</h3><p className="message__text">{message.chat}</p>
              <Delete handleChatDelete={this.handleChatDelete}/>
                </li>
            },this)}
          </ul>
        </section>
      </main>
    )
  }
})
