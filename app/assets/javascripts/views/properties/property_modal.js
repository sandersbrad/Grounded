Grounded.Views.PropertyModal = Backbone.View.extend({

  tagName: 'div',
  className: 'property-modal col-md-8',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.current_user_follow(), 'change', this.render);
    this.listenTo(this.model.current_user_invested(), 'change', this.render);
  },

  events: {
    'click .close' : 'removeModal',
    'click .toggle_follow': 'toggleFollow',
    'click .toggle_invest': 'toggleInvest'
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

  template: JST['properties/modal'],

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    this.addZillowChart();
    this.addDefaultImage();
  },

  addDefaultImage: function () {
    if (this.model.images().length > 0) {
      this.$('.default-image').html('<img src=' + this.model.images()[0].get('image_url') + '>');
    }
  },

  addZillowChart: function () {
    this.$('.zillow-chart').html('<img src=' + this.model.get('zillow_chart') + '>');
  },

  removeModal: function () {
    this.remove();
  }

});
