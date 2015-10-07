Grounded.Views.Sidebar = Backbone.View.extend({
  template: JST['sidebar/side'],
  className: 'side-cont',

  initialize: function () {
    this.listenTo(Grounded.followCollection, 'add remove', this.clickFollow);
    this.listenTo(Grounded.investedCollection, 'add remove', this.clickInvested);
  },

  render: function (event) {
    this.$el.html(this.template());

    if (Grounded.CURRENT_USER) {
      var followView = new Grounded.Views.FollowPropertiesIndex({
                                                      collection:
                                                      Grounded.followCollection
                                                                });
      var investedView = new Grounded.Views.InvestedPropertiesIndex({
                                                      collection:
                                                      Grounded.investedCollection
                                                                });

      this.$('.invested').html(investedView.render().$el);
      this.$('.followed').html(followView.render().$el);
    }

    return this;
  },

  clickFollow: function () {
    $('.follow_menu').click();
  },

  clickInvested: function () {
    $('.invest_menu').click();
  }

});
