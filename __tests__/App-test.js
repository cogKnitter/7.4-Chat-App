import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../modules/App';
import Chat from '../modules/Chat';
import $ from 'jquery';
import Serialize from 'form-serialize';

jest.unmock('../modules/App');
jest.unmock('../modules/Chat');

describe('App js', () => {
  var appRendered;

  beforeEach(()=>{
    appRendered = TestUtils.renderIntoDocument(
      <App/>
    );
  })

  it('contains chat app heading', () => {
    // find h1 on page
    var heading = TestUtils.findRenderedDOMComponentWithClass(appRendered, "heading");
    // assert it has text
    expect(heading.textContent).toEqual("Chat App");
  });

  it('renders message entry form', ()=> {

    var messageForm = TestUtils.findRenderedDOMComponentWithClass(appRendered, "message__form");
    expect(messageForm).toBeDefined();
  });
});
