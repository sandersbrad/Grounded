Grounded.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    // '': 'index',
    'properties': 'propertiesIndex',
    'follow_properties': 'followPropertiesIndex'
  },

  // index: function () {
  //   var view =
  // }

  propertiesIndex: function () {
    var view = new Grounded.Views.PropertiesIndex({ collection: this.collection });
    this._swapViews(view);
    this.collection.fetch();
  },

  followPropertiesIndex: function () {
    var user = new Grounded.Models.User({ id: 1 });
    var collection = user.followed_properties();
    var view = new Grounded.Views.FollowPropertiesIndex({ collection: collection });

    this._swapViews(view);
    user.fetch();
  },

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

});
