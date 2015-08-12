window.Grounded = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  
    var collection = new Grounded.Collections.Properties ();
    var $rootEl = $('#content');
    new Grounded.Routers.Router({
      collection: collection,
      $rootEl: $rootEl
    });

    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   Grounded.initialize();
// });
