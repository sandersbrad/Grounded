Grounded.Views.FollowInvestedIndexItem = Backbone.View.extend({

  tagName: 'div',
  className: 'follow-invested-item panel',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['properties/follow_invested_index_item'],

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    return this;
  }

});
