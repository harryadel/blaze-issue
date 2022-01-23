import './link_not_supported.html';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.link_not_supported.events({
  'click .go-back'(event) {
    event.preventDefault();
    // history.back()
    FlowRouter.go('/')
  }
})
