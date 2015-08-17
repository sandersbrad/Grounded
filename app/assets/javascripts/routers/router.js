Grounded.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
    Grounded.followCollection = new Grounded.Collections.FollowedProperties();
    Grounded.investedCollection = new Grounded.Collections.InvestedProperties();
    this.$sidebar = options.$sidebar;
    this.sidebar();
  },

  routes: {
    // '': 'index',
    '': 'propertiesIndex',
    'about': 'aboutPage',
    'faq': 'frequentlyAskedQuestions',
    'properties/:id': 'show'
    // 'invested_properties': 'investedPropertiesIndex'
  },

  // index: function () {
  //   var view =
  // }

  propertiesIndex: function () {
    var view = new Grounded.Views.PropertiesIndex({ collection: this.collection });
    this._swapViews(view);
    this.collection.fetch();
  },

  aboutPage: function () {
    var view = new Grounded.Views.About();
    this._swapViews(view);
  },

  frequentlyAskedQuestions: function () {
    var view = new Grounded.Views.FrequentlyAskedQuestions();
    this._swapViews(view);
  },

  show: function (id) {
    var model = this.collection.getOrFetch(id);
    var view = new Grounded.Views.PropertyShow({ model: model });
    this._swapViews(view);
  },

  sidebar: function () {
    var view = new Grounded.Views.Sidebar({});
    this.$sidebar.html(view.render().$el);

    if (Grounded.CURRENT_USER) {
      Grounded.followCollection.fetch();
      Grounded.investedCollection.fetch();
    }
  },

  followPropertiesIndex: function () {
    var collection = this.user.followed_properties();
    var view = new Grounded.Views.FollowPropertiesIndex({ collection: collection });

    this._swapViews(view);
    this.user.fetch();
  },
  //
  // investedPropertiesIndex: function () {
  //   var collection = this.user.invested_properties();
  //   var view = new Grounded.Views.InvestedPropertiesIndex({ collection: collection });
  //
  //   this._swapViews(view);
  //   this.user.fetch();
  // },

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

});
