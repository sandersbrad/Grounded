Grounded.Views.FollowInvestedIndexItem = Backbone.View.extend({

  tagName: 'div',
  className: 'follow-invested-item panel',

  events: {
    'click #street_address': 'showMarkerModal'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.investments(), 'add remove', this.render);
  },

  template: JST['properties/follow_invested_index_item'],

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    return this;
  },

  showMarkerModal: function () {
    debugger
    var propId = this.model.id
    Grounded.Views.PropertiesIndex.prototype.showMarkerModal(propId)
  },

});
