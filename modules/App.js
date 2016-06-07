import React from 'react'
import ReactDOM from 'react-dom'
import User from './User'

export default React.createClass({
  render() {
    return (
      <main>
        <section>
          <h1 className="heading">Chat App</h1>
          <User/>
        </section>
      </main>
    )
  }
})
