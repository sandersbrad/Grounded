Grounded.Views.PropertiesIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.addPropertyView)
  },

  addPropertyView: function (property) {
    var subview = new PropertiesIndexItem({ model: property });
    this.addSubview('.properties', subview)
  }

  template: JST['properties/index'],

  render: function () {
    var content = this.template({ properties: this.collection });
    this.$el.html(content);
    return this;
  }

});
