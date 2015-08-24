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

  updateValue: function () {
    var perc = $(event.currentTarget).find('input[type=number]').val();
    this.$('.percVal').html('$' + this.model.get('price') * (perc/100));
  },

});
