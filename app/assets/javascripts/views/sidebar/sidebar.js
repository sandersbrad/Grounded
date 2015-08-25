Grounded.Views.Sidebar = Backbone.View.extend({
  template: JST['sidebar/side'],

  initialize: function () {
    this.listenTo(Grounded.followCollection, 'change sync', this.render);
    this.listenTo(Grounded.investedCollection, 'change sync', this.render);
  },

  events: {
    'click #addNewProperty' : 'newForm'
  },

  render: function () {
    this.$el.html(this.template());

    if (Grounded.CURRENT_USER) {
      var followView = new Grounded.Views.FollowPropertiesIndex({ collection: Grounded.followCollection });
      var investedView = new Grounded.Views.InvestedPropertiesIndex({ collection: Grounded.investedCollection });

      this.$('.invested').html(investedView.render().$el);
      this.$('.followed').html(followView.render().$el);
    }

    return this;
  },

  newForm: function () {
    Grounded.EventBus.trigger('newForm');
  }

});
