window.Grounded = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var collection = new Grounded.Collections.Properties ();
    var $rootEl = $('#content');
    var $sidebar = $('#side-bar');
    new Grounded.Routers.Router({
      collection: collection,
      $rootEl: $rootEl,
      $sidebar: $sidebar
    });
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   Grounded.initialize();
// });
