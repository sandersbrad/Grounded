Grounded.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    // '': 'index',
    'properties': 'propertiesIndex'
  },

  // index: function () {
  //   var view =
  // }

  propertiesIndex: function () {
    var view = new Grounded.Views.PropertiesIndex({ collection: this.collection });
    this._swapViews(view);
    this.collection.fetch();
  },

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
