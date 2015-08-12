Grounded.Views.PropertiesIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addPropertyView);
    this.collection.each(this.addPropertyView.bind(this));
  },

  addPropertyView: function (property) {
    var subview = new Grounded.Views.PropertiesIndexItem({ model: property });
    this.addSubview('.properties', subview);
  },

  template: JST['properties/index'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
