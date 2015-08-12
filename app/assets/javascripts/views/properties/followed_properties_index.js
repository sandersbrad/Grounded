Grounded.Views.FollowPropertiesIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPropertyView);
    this.collection.each(this.addPropertyView.bind(this));
  },

  addPropertyView: function (property) {
    var subview = new Grounded.Views.PropertiesIndexItem({ model: property });
    this.addSubview('.follow_properties', subview);
  },

  template: JST['properties/follow_properties'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
