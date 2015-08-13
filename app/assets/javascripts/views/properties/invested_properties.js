Grounded.Views.InvestedPropertiesIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPropertyView);
    this.listenTo(this.collection, 'remove', this.removePropertyView);
    this.listenTo(this.collection, 'sync change', this.render);
    this.collection.each(this.addPropertyView.bind(this));
  },

  tagName: 'div',
  className: 'invested_properties_side',

  addPropertyView: function (property) {
    var subview = new Grounded.Views.FollowInvestedIndexItem({ model: property });
    this.addSubview('.invested_properties', subview);
  },

  removePropertyView: function (property) {
    this.removeModelSubview('.invested_properties', property);
  },

  template: JST['properties/invested_properties'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
