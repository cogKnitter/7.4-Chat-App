import React from 'react'
import $ from 'jquery'
import Serialize from 'form-serialize'
import { Router, browserHistory } from "react-router"

export default React.createClass({
  getInitialState(){
  return {
    username: ''
    }
  },
  onHandlePostSuccess(resp){
    browserHistory.push(`/chat/${resp._id}`);
  },
  addUser(userData){
    console.log("pushing to ajax");
    $.post({
      url: "https://tiny-tiny.herokuapp.com/collections/mariah_chat_users",
      data: userData,
      success: this.onHandlePostSuccess
    })
  },
  serializeForm(form){
  return Serialize(form, {hash: true});
  },
  onHandleAddUser(e){
    console.log("form submitted");
    e.preventDefault();
    var inputData = this.serializeForm(this.refs["add--user"]);
    this.addUser(inputData);
  },
  render(){
    return (
      <section>
        <form className="user__form" method="POST" action="#" onSubmit={this.onHandleAddUser} ref="add--user">
          <input className="user__entry" type="text" name="username" placeholder="please choose a username"/>
          <input className="user__entry--submit" type="submit" value="Start Chatting"/>
        </form>
      </section>
    )
  }
})
