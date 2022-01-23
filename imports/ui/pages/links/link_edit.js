import './link_edit.html';


import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.link_edit.events({
  'click .go-back'(event) {
    event.preventDefault();
    history.back()
    // FlowRouter.go('/')
  },

})
