// Grounded.Mixins.Financial = {
// 
//   CUMPRINC: function(rate, periods, value, start, end, type) {
//     // Credits: algorithm inspired by Apache OpenOffice
//     // Credits: Hannes Stiebitzhofer for the translations of function and variable names
//
//     rate = this.parseNumber(rate);
//     periods = this.parseNumber(periods);
//     value = this.parseNumber(value);
//     if (this.anyIsError(rate, periods, value)) {
//       return error.value;
//     }
//
//     // Return error if either rate, periods, or value are lower than or equal to zero
//     if (rate <= 0 || periods <= 0 || value <= 0) {
//       return error.num;
//     }
//
//     // Return error if start < 1, end < 1, or start > end
//     if (start < 1 || end < 1 || start > end) {
//       return error.num;
//     }
//
//     // Return error if type is neither 0 nor 1
//     if (type !== 0 && type !== 1) {
//       return error.num;
//     }
//
//     // Compute cumulative principal
//     var payment = exports.PMT(rate, periods, value, 0, type);
//     var principal = 0;
//     if (start === 1) {
//       if (type === 0) {
//         principal = payment + value * rate;
//       } else {
//         principal = payment;
//       }
//       start++;
//     }
//     for (var i = start; i <= end; i++) {
//       if (type > 0) {
//         principal += payment - (exports.FV(rate, i - 2, payment, value, 1) - payment) * rate;
//       } else {
//         principal += payment - exports.FV(rate, i - 1, payment, value, 0) * rate;
//       }
//     }
//
//     // Return cumulative principal
//     return principal;
//   },
//
//   PMT: function(rate, periods, present, future, type) {
//     // Credits: algorithm inspired by Apache OpenOffice
//
//     future = future || 0;
//     type = type || 0;
//
//     rate = this.parseNumber(rate);
//     periods = this.parseNumber(periods);
//     present = this.parseNumber(present);
//     future = this.parseNumber(future);
//     type = this.parseNumber(type);
//     if (this.anyIsError(rate, periods, present, future, type)) {
//       return error.value;
//     }
//
//     // Return payment
//     var result;
//     if (rate === 0) {
//       result = (present + future) / periods;
//     } else {
//       var term = Math.pow(1 + rate, periods);
//       if (type === 1) {
//         result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
//       } else {
//         result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
//       }
//     }
//     return -result;
//   },
//
//   parseNumber: function(string) {
//     if (string === undefined || string === '') {
//       return error.value;
//     }
//     if (!isNaN(string)) {
//       return parseFloat(string);
//     }
//     return error.value;
//   },
//
//   anyIsError: function() {
//     var n = arguments.length;
//     while (n--) {
//       if (arguments[n] instanceof Error) {
//         return true;
//       }
//     }
//     return false;
//   }
// };
