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
    this.inflation = 0.02;
    this.coInitDebt = (this.price * this.desInitOwn * this.perInvPaidWDebt);
    this.landedFee = 0.0165;
    this.anPropTax = 0.011;
    this.maxPropTaxInc = 0.02;
    this.mortgageInsurance = 0.01;
    this.homeInsAnPerc = 0.0044;
    this.homeRepAnPerc = 0.01;
    this.oppCostReturn = 0.0528;
    // this.refreshValues();
    // this.refreshTable();
  },

  CUMPRINC: function(rate, periods, value, start, end, type) {
    // Credits: algorithm inspired by Apache OpenOffice
    // Credits: Hannes Stiebitzhofer for the translations of function and variable names

    rate = this.parseNumber(rate);
    periods = this.parseNumber(periods);
    value = this.parseNumber(value);
    if (this.anyIsError(rate, periods, value)) {
      return error.value;
    }

    // Return error if either rate, periods, or value are lower than or equal to zero
    if (rate <= 0 || periods <= 0 || value <= 0) {
      return error.num;
    }

    // Return error if start < 1, end < 1, or start > end
    if (start < 1 || end < 1 || start > end) {
      return error.num;
    }

    // Return error if type is neither 0 nor 1
    if (type !== 0 && type !== 1) {
      return error.num;
    }

    // Compute cumulative principal
    var payment = this.PMT(rate, periods, value, 0, type);
    var principal = 0;
    if (start === 1) {
      if (type === 0) {
        principal = payment + value * rate;
      } else {
        principal = payment;
      }
      start++;
    }
    for (var i = start; i <= end; i++) {
      if (type > 0) {
        principal += payment - (this.FV(rate, i - 2, payment, value, 1) - payment) * rate;
      } else {
        principal += payment - this.FV(rate, i - 1, payment, value, 0) * rate;
      }
    }

    // Return cumulative principal
    return principal;
  },

  FV: function(rate, periods, payment, value, type) {
  // Credits: algorithm inspired by Apache OpenOffice

  value = value || 0;
  type = type || 0;

  rate = this.parseNumber(rate);
  periods = this.parseNumber(periods);
  payment = this.parseNumber(payment);
  value = this.parseNumber(value);
  type = this.parseNumber(type);
  if (this.anyIsError(rate, periods, payment, value, type)) {
    return error.value;
  }

  // Return future value
  var result;
  if (rate === 0) {
    result = value + payment * periods;
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      result = value * term + payment * (1 + rate) * (term - 1) / rate;
    } else {
      result = value * term + payment * (term - 1) / rate;
    }
  }
  return -result;
},

  // PMT: function(rate, periods, present, future, type) {
  //   // Credits: algorithm inspired by Apache OpenOffice
  //
  //   future = future || 0;
  //   type = type || 0;
  //
  //   rate = this.parseNumber(rate);
  //   periods = this.parseNumber(periods);
  //   present = this.parseNumber(present);
  //   future = this.parseNumber(future);
  //   type = this.parseNumber(type);
  //   if (this.anyIsError(rate, periods, present, future, type)) {
  //     return error.value;
  //   }
  //
  //   // Return payment
  //   var result;
  //   if (rate === 0) {
  //     result = (present + future) / periods;
  //   } else {
  //     var term = Math.pow(1 + rate, periods);
  //     if (type === 1) {
  //       result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
  //     } else {
  //       result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
  //     }
  //   }
  //   return -result;
  // },

  PMT: function(i, n, p) {
    return i * p * Math.pow((1 + i), n) / (1 - Math.pow((1 + i), n));
  },

  parseNumber: function(string) {
    if (string === undefined || string === '') {
      return error.value;
    }
    if (!isNaN(string)) {
      return parseFloat(string);
    }
    return error.value;
  },

  anyIsError: function() {
    var n = arguments.length;
    while (n--) {
      if (arguments[n] instanceof Error) {
        return true;
      }
    }
    return false;
  },

  annualRentalCost: function (n) {
    return (this.rentPrice * 12 * Math.pow((1 + this.anRentInc),(this.yearsUntilMove - 1))/Math.pow((1 + this.inflation),(this.yearsUntilMove - 0.5)));
  },


  rentTotalInvestment: function (n) {
    var total = this.rentPrice * 2;
    while ( n > 1 ) {
      total = total + this.rentGainLost(n - 1) + (0.5 * (this.annualRentalCost * n));
      n -= 1;
    }
    return total;
  },

  rentGainLost: function (n) {
    return this.rentTotalInvestment(n) * this.oppCostReturn;
  },

  rentTotalOpportunityCost: function (n) {
    var total = 0;
    while ( n >= 0 ) {
      total += this.rentGainLost(n);
      n -= 1;
    }
    return -total;
  },

  rentExcessInvest: function () {
    var n = this.yearsUntilMove;
    var total = 0;
    while (n > 0) {
      total += this.rentTotalOpportunityCost(n);
      n -= 1;
    }
    return -total;
  },

  homeValue: function (n) {
    if ( n === undefined ) {
      n = this.yearsUntilMove;
    }

    var value = this.price;

    while ( n > 1 ) {
      value = value * Math.pow(1 + this.anHomeValInc, n)/Math.pow((1 + this.inflation), (n - 0.5));
      n -= 1;
    }
    return value;
  },

  ownInitDebt: function () {
    return this.price - this.initEquity();
  },

  initEquity: function (n) {
    return this.price * (1 - this.perInvPaidWDebt);
  },

  ownDebt: function (n) {
    //this is a little inaccurate
    return (this.ownInitDebt() + this.CUMPRINC(this.perDebtRate/12, 360, 100, 1, 12, 0)/100 * this.ownInitDebt())/Math.pow(1 + this.inflation, n - 0.5);
  },

  ownEquity: function (n) {
    return this.homeValue(n) - this.ownDebt(n);
  },

  loanLTV: function (n) {
    return this.ownEquity(n) / this.homeValue(n);
  },

  ownMortgagePayments: function (n) {
    return Math.abs(this.PMT(this.perDebtRate/12, 360, this.ownInitDebt())*12)/Math.pow((1 + this.inflation), (n - 0.5));
  },

  ownMortgageInsurance: function (n) {
    if (this.loanLTV(n)) {
      return this.homeValue(n) * this.mortgageInsurance;
    } else {
      return 0;
    }
  },

  homeInsurance: function (n) {
    return this.homeValue(n) * this.homeInsAnPerc;
  },

  ownPropertyTax: function (n) {
    return this.price * this.anPropTax * Math.pow(1 + this.maxPropTaxInc, n - 1);
  },

  ownRepairAndMaint: function (n) {
    return this.homeValue(n) * this.homeRepAnPerc;
  },

  ownMortgageTaxDeduction: function (n) {
    return -(this.ownMortgagePayments(n) - (this.ownDebt(n - 1) - this.ownDebt(n))) * this.personTaxRate;
  },

  ownTotalExpenses: function (n) {
    return this.ownMortgagePayments(n) + this.ownMortgageInsurance(n) + this.homeInsurance(n) + this.ownPropertyTax(n) + this.ownRepairAndMaint(n) + this.ownMortgageTaxDeduction(n);
  },

  ownTotalOngoing: function () {
    var n = this.yearsUntilMove;
    var total = 0;
    while (n >= 1) {
      total += this.ownTotalExpenses(n);
      n -= 1;
    }

    return total;
  },



//co-owner functions start here

  coOwnershipValue: function () {
    return this.homeValue() * this.desInitOwn;
  },

  coDebt: function (n) {
    return (this.coInitDebt + this.CUMPRINC(this.perDebtRate/12, 360, 100, 1, 12, 0)/100 * this.coInitDebt)/Math.pow(1 + this.inflation, n - 0.5);
  },

  coMortgagePayments: function (n) {
    return Math.abs(this.PMT(this.perDebtRate/12, 360, this.coInitDebt)*12)/Math.pow((1 + this.inflation), (n - 0.5));
  },

  landedExpenses: function () {
    return this.coOwnershipValue() * this.landedFee;
  },


  coPropertyTax: function (n) {
    return this.ownPropertyTax(n) * this.desInitOwn;
  },

  coMortgageTaxDeduction: function (n) {
    return -(this.coMortgagePayments(n) - (this.coDebt(n - 1) - this.coDebt(n))) * this.personTaxRate;
  },

  totalCoOwnExpenses: function (n) {
    return this.coMortgagePayments(n) + this.landedExpenses() + this.coPropertyTax(n) + this.coMortgageTaxDeduction(n);
  },

  rentToCoOwners: function () {
    return this.annualRentalCost() * (1 - this.desInitOwn);
  },

  coTotalExpenses: function (n) {
    return this.rentToCoOwners() + this.totalCoOwnExpenses(n);
  },

  coTotalOngoing: function () {
    var n = this.yearsUntilMove;
    var total = 0;
    while (n >= 1) {
      total += this.coTotalExpenses(n);
      n -= 1;
    }

    return total;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.createSliders();
    return this;
  },

  createSliders: function () {
    this.$('#years-slider').slider({
      min: 2,
      max: 10,
      value: 7,
      create: this.refreshValues.bind(this),
      slide: this.refreshValues.bind(this),
      change: this.refreshValues.bind(this)
    });
    this.$('#anHomValInc-slider').slider({
      min: 0,
      max: 1,
      value: 0.02,
      step: 0.01,
      create: this.refreshValues.bind(this),
      slide: this.refreshValues.bind(this),
      change: this.refreshValues.bind(this)
    });
    this.$('#perInvPaidWDebt-slider').slider({
      min: 0,
      max: 1,
      value: 0.80,
      step: 0.01,
      create: this.refreshValues.bind(this),
      slide: this.refreshValues.bind(this),
      change: this.refreshValues.bind(this)
    });
    this.$('#desInitOwn-slider').slider({
      min: 0.04,
      max: 0.5,
      value: 0.20,
      step: 0.01,
      create: this.refreshValues.bind(this),
      slide: this.refreshValues.bind(this),
      change: this.refreshValues.bind(this)
    });

    this.refreshValues();
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
    this.$('#ongoingSpending-rental').html(this.annualRentalCost() * this.yearsUntilMove);
    this.$('#ongoingSpending-co').html(this.coTotalOngoing());
    this.$('#ongoingSpending-own').html(this.ownTotalOngoing());
    this.$('#excessInvest-rental').html(this.rentExcessInvest());
  }



});

// _.extend(Grounded.Views.Slider.prototype, Grounded.Mixins.Financial)
