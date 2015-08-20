Grounded.Views.InvestForm = Backbone.View.extend({

  template: JST['forms/invest'],
  tagName: 'div',
  className: 'investment-form',

  events: {
    'submit form': 'submitForm'
  },

  render: function () {
    var content = this.template({ property: this.model,
                                  investment: this.investment });
    this.$el.html(content);
    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
    var percentage = $(event.currentTarget).find('input[type=number]').val();

    var investmentAttrs = {
      property_id: this.model.id,
      user_id: Grounded.CURRENT_USER.id,
      percentage: percentage
    };

    this.model.current_user_invested().save(investmentAttrs, {
      success: function () {
        Grounded.investedCollection.add(this.model);
      }.bind(this)
    });
  }

});
