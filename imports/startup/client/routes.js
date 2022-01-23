import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/links/link.js';
import '../../ui/pages/links/link_edit.js';
import '../../ui/pages/links/link_dynamic.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    this.render('App_body', 'App_home');
  },
});

FlowRouter.route('*', {
  action() {
    this.render('App_body', 'App_notFound');
  },
})


FlowRouter.route('/link/:id', {
  name: 'link',
  action() {
    this.render('App_body', 'link_dynamic');
  },
});


FlowRouter.route('/link/:id/edit', {
  name: 'link_edit',
  action() {
    this.render('App_body', 'link_edit');
  },
});
