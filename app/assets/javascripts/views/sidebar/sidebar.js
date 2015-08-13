Grounded.Views.Sidebar = Backbone.View.extend({
  template: JST['sidebar/side'],

  initialize: function () {
    this.listenTo(Grounded.followCollection, 'change sync', this.render);
    this.listenTo(Grounded.investedCollection, 'change sync', this.render);
  },

  render: function () {
    var followView = new Grounded.Views.FollowPropertiesIndex({ collection: Grounded.followCollection });
    var investedView = new Grounded.Views.InvestedPropertiesIndex({ collection: Grounded.investedCollection });

    this.$el.html(this.template());
    this.$('.invested').html(investedView.render().$el);
    this.$('.followed').html(followView.render().$el);

    return this;
  }

});
