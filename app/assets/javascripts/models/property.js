Grounded.Models.Property = Backbone.Model.extend({

  urlRoot: 'api/properties',

  parse: function (response) {
    if (response.current_user_follow) {
      this.current_user_follow().set(response.current_user_follow);
    }

    if (response.current_user_invested) {
      this.current_user_invested().set(response.current_user_invested);
    }

    if (response.images) {
      response.images.forEach(function (image) {
        this.images().push(new Grounded.Models.Image(image));
      }.bind(this));
    }

    return response;
  },

  images: function () {
    if (!this._images) {
      this._images = [];
    }

    return this._images;
  },

  current_user_follow: function () {
    if (!this._current_user_follow) {
      this._current_user_follow = new Grounded.Models.Follow();
    }
    return this._current_user_follow;
  },

  current_user_invested: function () {
    if (!this._current_user_invested) {
      this._current_user_invested = new Grounded.Models.Investment();
    }
    return this._current_user_invested;
  },

  isFollowed: function () {
    return !this.current_user_follow().isNew();
  },

  isInvested: function () {
    return !this.current_user_invested().isNew();
  }

});
