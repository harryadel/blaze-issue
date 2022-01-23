import './link_dynamic.html';
import './link.js';
import './link_not_supported.js';

Template.link_dynamic.helpers({
  target(){
    var random_boolean = Math.random() < 0.5;

    if(random_boolean){
      return 'link'
    } else {
      return 'link_not_supported'
    }
  }
})

// commant this and this err will go away
Template.link_dynamic.events({
  'click .go-back'(event, instance) {
    event.preventDefault()
    history.back()
  },
})
