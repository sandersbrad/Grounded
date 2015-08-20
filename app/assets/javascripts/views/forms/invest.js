Grounded.Views.InvestForm = Backbone.View.extend({

  template: JST['forms/invest'],
  tagName: 'div',
  className: 'investment-form',

  render: function () {
    this.$el.html(this.template({ property: this.model }));
    return this;
  },

});
