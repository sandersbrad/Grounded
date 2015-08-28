Grounded.Views.InvestForm = Backbone.View.extend({

  template: JST['forms/invest'],
  tagName: 'div',
  className: 'investment-form',

  events: {
    'change input.perc': 'updateValue'
  },

  render: function () {
    this.$el.html(this.template({ property: this.model }));
    return this;
  },

  updateValue: function (event) {
    event.preventDefault();
    var perc = $(event.currentTarget).val();
    this.$('.percVal').html('$' + (parseInt(this.model.get('zestimate')) * (perc/100)).formatMoney(2));
  },
});
