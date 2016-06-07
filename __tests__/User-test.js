import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import User from '../modules/User';

jest.unmock('../modules/User');

describe("User entry", ()=> {
  var userRendered;

  beforeEach(()=>{
    userRendered = TestUtils.renderIntoDocument(
      <User/>
    );
  })

  it('contains user input', ()=> {
    var userAddInput = TestUtils.findRenderedDOMComponentWithClass(userRendered, "user__entry");
    expect(userAddInput).toBeDefined();
  });
})
