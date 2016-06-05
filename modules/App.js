import React from 'react'
import ReactDOM from 'react-dom'
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
