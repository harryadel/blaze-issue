import './link.html';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.link.events({
  'click .go-back'(event) {
    event.preventDefault();
    FlowRouter.go('/')
  },
  'click .edit'(event) {
    event.preventDefault();
    const id = FlowRouter.getParam('id');
    FlowRouter.go('link_edit', { id: id });
  }
})
