Grounded.Collections.Investments = Backbone.Collection.extend({

  url: 'api/investments',

  model: Grounded.Models.Investment,

  total_confirmed: function () {
    var confirmed = this.where({ pending: false })

    return confirmed.reduce(function (accum, investment) {
      return accum + investment.get('percentage')
    }, 0)
  },

  total_pending: function () {
    var pending = this.where({ pending: true })

    return pending.reduce(function (accum, investment) {
      return accum + investment.get('percentage')
    }, 0)
  },

  total_overall: function () {
    return this.reduce(function (accum, investment) {
      return accum + investment.get('percentage')
    }, 0)
  }
});
