import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Chat from '../modules/Chat';
import $ from 'jquery';
import Serialize from 'form-serialize';
import AddMessage from '../modules/AddMessage';
import Delete from '../modules/Delete';

jest.unmock('../modules/Chat');
jest.unmock('../modules/AddMessage')
jest.unmock('../modules/Delete')


describe('Chat', () => {
  var chatRendered;

  beforeEach(()=>{
    chatRendered = TestUtils.renderIntoDocument(
      <Chat/>
    );
  })

  it('renders message entry form', ()=> {

    var messageForm = TestUtils.findRenderedDOMComponentWithClass(chatRendered, "message__form");
    expect(messageForm).toBeDefined();
  });
  it ('renders delete button', ()=> {
    var deleteButton = TestUtils.scryRenderedDOMComponentsWithClass(chatRendered, "delete__chat");
    expect(deleteButton).toBeDefined();
  });
  it ('renders messages', ()=> {
    var messages = TestUtils.scryRenderedDOMComponentsWithClass(chatRendered, "message__item");
    expect(messages).toBeDefined();
  });
});
