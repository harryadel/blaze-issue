import './child_template.html';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.child_template.events({
  'click .go-back'(event) {
    console.log("CHILD TEMPLATE")
    event.preventDefault();
    FlowRouter.go('/')
  }
})
