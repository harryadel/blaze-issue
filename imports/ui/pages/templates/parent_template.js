import './parent_template.html';

Template.parent_template.helpers({
  target(){
    return 'child_template'
  }
})

// comment this and this err will go away
Template.parent_template.events({
  'click .go-back'(event, instance) {
    console.log("PARENT TEMPLATE")
    event.preventDefault()
    history.back()
  },
})
