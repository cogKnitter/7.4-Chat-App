import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Serialize from 'form-serialize'
import Chat from './Chat'

export default React.createClass({
  render() {
    return (
      <main>
        <section>
          <h1 className="heading">Chat App</h1>
          <Chat/>
        </section>
      </main>
    )
  }
})
