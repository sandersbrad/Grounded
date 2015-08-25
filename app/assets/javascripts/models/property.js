Grounded.Models.Property = Backbone.Model.extend({

  urlRoot: 'api/properties',

  parse: function (response) {
    // Sets whether or not current user follows this property model
    if (response.current_user_follow) {
      this.current_user_follow().set(response.current_user_follow);
    }
    // Sets whether or not current user is invested in this property model
    if (response.current_user_invested) {
      this.current_user_invested().set(response.current_user_invested);
    }
    // Makes an array of property images for use in carousel
    if (response.images) {
      this.images().set(response.images);
    }
    //Makes an investment collection from properties api
    if (response.investments) {
      this.investments().set(response.investments);
      delete response.investments;
    }
    return response;
  },

  images: function () {
    if (!this._images) {
      this._images = new Grounded.Collections.Images([], { property: this });
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

  investments: function () {
    if (!this._investments) {
      this._investments = new Grounded.Collections.Investments([], {
        property: this
      });
    }
    return this._investments;
  },

  // A new model won't have an id, so returns true if isNew()?
  isFollowed: function () {
    return !this.current_user_follow().isNew();
  },

  isInvested: function () {
    return !this.current_user_invested().isNew();
  }
});
