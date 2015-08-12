Grounded.Models.User = Backbone.Model.extend({

  urlRoot: 'api/users',

  followed_properties: function () {
    if (!this._followed_properties) {
      this._followed_properties = new Grounded.Collections.FollowedProperties([], { user: this });
    }
    return this._followed_properties;
  },

  parse: function (response) {
    if (response.followed_properties) {
      this.followed_properties().set(response.followed_properties);
      delete response.followed_properties;
    }
    return response;

  }
});
