Grounded.Routers.Router = Backbone.Router.extend({

  initialize: function () {
    this.$rootEl = options.$rootEl
    this.collection = options.collection
  },

  routes: {
    '': 'index',
    'properties': 'propertiesIndex'
  },

  index: function () {
    var view =
  }

});
