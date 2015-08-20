// Grounded.Models.User = Backbone.Model.extend({
//
//   urlRoot: 'api/users',
//
//   followed_properties: function () {
//     if (!this._followed_properties) {
//       this._followed_properties = new Grounded.Collections.FollowedProperties([], { user: this });
//     }
//     return this._followed_properties;
//   },
//
//   invested_properties: function () {
//     if (!this._invested_properties) {
//       this._invested_properties = new Grounded.Collections.InvestedProperties([], { user: this });
//     }
//     return this._invested_properties;
//   },
//
//   parse: function (response) {
//     if (response.followed_properties) {
//       this.followed_properties().set(response.followed_properties, { parse: true });
//       delete response.followed_properties;
//     }
//
//     if (response.invested_properties) {
//       this.invested_properties().set(response.invested_properties, { parse: true });
//       delete response.invested_properties;
//     }
//     return response;
//   }
// });
