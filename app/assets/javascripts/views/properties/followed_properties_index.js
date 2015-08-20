Grounded.Views.FollowPropertiesIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPropertyView);
    this.listenTo(this.collection, 'remove', this.removePropertyView);
    this.listenTo(this.collection, 'sync change', this.render);
    this.collection.each(this.addPropertyView.bind(this));
  },

  template: JST['properties/follow_properties'],
  tagName: 'div',
  className: 'followed_properties_side',

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPropertyView: function (property) {
    var subview = new Grounded.Views.FollowInvestedIndexItem({ model: property });
    this.addSubview('.follow_properties', subview);
  },

  removePropertyView: function (property) {
    this.removeModelSubview('.follow_properties', property);
  }
});
