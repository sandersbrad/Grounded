Grounded.Views.PropertiesIndexItem = Backbone.View.extend({
  template: JST['properties/index_item'],
  tagName: 'div',
  className: 'property_index_item col-xs-4',

  events: {
    'click .toggle': 'toggleFollow',
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.current_user_follow(), 'change', this.render);
  },

  toggleFollow: function (event) {
    if (this.model.isFollowed()){
      this.unfollowProperty();
    } else {
      this.followProperty();
    }
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
