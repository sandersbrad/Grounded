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
    '': 'propertiesIndex',
    'about': 'aboutPage',
    'faq': 'frequentlyAskedQuestions',
    'properties/:id': 'show',
    'contact': 'contactUs',
    'slider': 'slider',
    'map': 'mapShow'
  },

  mapShow: function () {
    var view = new Grounded.Views.Map();
    this._swapViews(view);
    view.initMap();
  },

  slider: function () {
    var view = new Grounded.Views.Slider();
    this._swapViews(view);
  },

  propertiesIndex: function () {
    var view = new Grounded.Views.PropertiesIndex({ collection: this.collection });
    this._swapViews(view);
    this.collection.fetch();
  },

  aboutPage: function () {
    var view = new Grounded.Views.About();
    this._swapViews(view);
  },

  contactUs: function () {
    var view = new Grounded.Views.Contact();
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

  _swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  },

});
