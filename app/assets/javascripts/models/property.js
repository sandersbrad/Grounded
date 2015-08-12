Grounded.Models.Property = Backbone.Model.extend({

  urlRoot: 'api/properties',

  parse: function (response) {
    if (response.current_user_follow) {
      this.current_user_follow().set(response.current_user_follow);
    }
    return response;
  },

  current_user_follow: function () {
    if (!this._current_user_follow) {
      this._current_user_follow = new Grounded.Models.Follow();
    }
    return this._current_user_follow;
  },

  isFollowed: function () {
    return !this.current_user_follow().isNew();
  }

});
