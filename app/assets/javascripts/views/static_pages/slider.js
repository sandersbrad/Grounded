Grounded.Views.Slider = Backbone.View.extend({

  template: JST['static_pages/slider'],

  initialize: function () {
    this.price = 700000;
    this.rentPrice = (this.price * 0.005);
    this.personTaxRate = (0.33);
    this.anHomeValInc = 0.02;
    this.anRentInc = this.anHomeValInc;
    this.perDebtRate = 0.036;
    this.desInitOwn = 0.2;
    this.yearsUntilMove = 7;
    this.perInvPaidWDebt = 0.8;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    $(function () {
      $('#years-slider').slider({
        min: 2,
        max: 10,
        value: 2,
        slide: this.refreshValues.bind(this),
        change: this.refreshValues.bind(this)
      });
      $('#anHomValInc-slider').slider({
        min: 0.02,
        max: 1,
        value: 0.02,
        step: 0.01,
        slide: this.refreshValues.bind(this),
        change: this.refreshValues.bind(this)
      });
      $('#perInvPaidWDebt-slider').slider({
        min: 0.04,
        max: 1,
        value: 0.04,
        step: 0.01,
        slide: this.refreshValues.bind(this),
        change: this.refreshValues.bind(this)
      });
      $('#desInitOwn-slider').slider({
        min: 0.04,
        max: 0.5,
        value: 0,
        step: 0.01,
        slide: this.refreshValues.bind(this),
        change: this.refreshValues.bind(this)
      });

    }.bind(this));

    return this;
  },

  refreshValues: function () {
    this.yearsUntilMove = $("#years-slider").slider("value");
    this.$('.years').html(this.yearsUntilMove);

    this.anHomValInc = $('#anHomValInc-slider').slider("value");
    this.$('.anHomValInc').html(this.anHomValInc);

    this.perInvPaidWDebt = $('#perInvPaidWDebt-slider').slider("value");
    this.$('.perInvPaidWDebt').html(this.perInvPaidWDebt);

    this.desInitOwn = $('#desInitOwn-slider').slider("value");
    this.$('.desInitOwn').html(this.desInitOwn);

    this.refreshTable();
  },

  refreshTable: function () {
    this.$('#moneyUpFront-rental').html(this.rentPrice * 2);
    this.$('#moneyUpFront-co').html(this.price*this.desInitOwn*(1-this.perInvPaidWDebt));
    this.$('#moneyUpFront-own').html(this.price*(1-this.perInvPaidWDebt));
  }



});
