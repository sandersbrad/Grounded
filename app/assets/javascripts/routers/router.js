Grounded.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
    this.user = new Grounded.Models.User({ id: Grounded.CURRENT_USER.id });
  },

  routes: {
    // '': 'index',
    'properties': 'propertiesIndex',
    'follow_properties': 'followPropertiesIndex',
    'invested_properties': 'investedPropertiesIndex'
  },

  // index: function () {
  //   var view =
  // }

  propertiesIndex: function () {
    // var followedCollection = this.user.followed_properties();
    var view = new Grounded.Views.PropertiesIndex({ collection: this.collection });
    this._swapViews(view);
    this.collection.fetch();
    this.user.fetch();
  },

  followPropertiesIndex: function () {
    var collection = this.user.followed_properties();
    var view = new Grounded.Views.FollowPropertiesIndex({ collection: collection });

    this._swapViews(view);
    this.user.fetch();
  },

  investedPropertiesIndex: function () {
    var collection = this.user.invested_properties();
    var view = new Grounded.Views.InvestedPropertiesIndex({ collection: collection });

    this._swapViews(view);
    this.user.fetch();
  },

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

});
