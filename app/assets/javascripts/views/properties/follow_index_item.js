Grounded.Views.FollowIndexItem = Backbone.View.extend({

  tagName: 'div',
  className: 'property_index_item col-xs-4',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['properties/follow_index_item'],

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    return this;
  }

});
