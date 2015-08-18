Grounded.Views.PropertiesIndex = Backbone.CompositeView.extend({

  className: 'index-parent',

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addPropertyView);
    this.listenTo(this.collection, 'sync', this.addMapSubview);
    this.collection.each(this.addPropertyView.bind(this));
    this.addMapSubview();
  },

  addPropertyView: function (property) {
    var subview = new Grounded.Views.PropertiesIndexItem({ model: property });
    this.addSubview('.properties', subview);
  },

  addMapSubview: function () {
    this.mapSubview = new Grounded.Views.Map({ collection: this.collection });
    this.addSubview('.map', this.mapSubview);
  },

  template: JST['properties/index'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.mapSubview.initMap();
    return this;
  }
});
