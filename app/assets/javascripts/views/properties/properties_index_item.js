Grounded.Views.PropertiesIndexItem = Backbone.View.extend({
  template: JST['properties/index_item'],
  tagName: 'div',
  className: 'property_index_item col-xs-4',

  events: {
    'click .toggle_follow': 'toggleFollow',
    'click .toggle_invest': 'toggleInvest'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.current_user_follow(), 'change', this.render);
    this.listenTo(this.model.current_user_invested(), 'change', this.render);
  },

  toggleFollow: function (event) {
    if (this.model.isFollowed()){
      this.unfollowProperty();
    } else {
      this.followProperty();
    }
  },

  toggleInvest: function (event) {
    // This will need to change.  Don't want users to just univest.
    // better redirected to a qualifaction page.
    if (this.model.isInvested()) {
      this.uninvestProperty();
    } else {
      this.investProperty();
    }
  },

  investProperty: function () {
    this.model.current_user_invested().save({ property_id: this.model.id,
                                              user_id: Grounded.CURRENT_USER.id });
  },

  uninvestProperty: function () {
    this.model.current_user_invested().destroy();
    this.model.current_user_invested().clear();
  },

  followProperty: function() {
    this.model.current_user_follow().save({ property_id: this.model.id,
                                            user_id: Grounded.CURRENT_USER.id });
  },

  unfollowProperty: function () {
    this.model.current_user_follow().destroy();
    this.model.current_user_follow().clear();
  },

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    return this;
  }

});
