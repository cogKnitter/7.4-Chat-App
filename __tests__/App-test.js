import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../modules/App';


jest.unmock('../modules/App');


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
});
