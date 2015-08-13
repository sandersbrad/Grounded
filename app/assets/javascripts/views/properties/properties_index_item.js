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
    if (this.model.isInvested()) {
      this.uninvestProperty();
    } else {
      this.investProperty();
    }
  },

  investProperty: function () {
    this.model.current_user_invested().save({ property_id: this.model.id,
                                              user_id: Grounded.CURRENT_USER.id },
                                            { success: function () {
                                                Grounded.investedCollection.add(this.model); }.bind(this),
                                            });
  },

  uninvestProperty: function () {
    this.model.current_user_invested().destroy({
      success: function () {
        Grounded.investedCollection.remove(this.model);
      }.bind(this)
    });
    this.model.current_user_invested().clear();
  },


  followProperty: function() {
    this.model.current_user_follow().save({ property_id: this.model.id,
                                            user_id: Grounded.CURRENT_USER.id },
                                          { success: function () {
                                              Grounded.followCollection.add(this.model); }.bind(this),
                                          });
  },

  unfollowProperty: function () {
    this.model.current_user_follow().destroy({
      success: function () {
        Grounded.followCollection.remove(this.model);
      }.bind(this)
    });
    this.model.current_user_follow().clear();
  },

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    return this;
  }

});
