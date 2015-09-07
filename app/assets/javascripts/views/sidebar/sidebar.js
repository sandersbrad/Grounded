Grounded.Views.Sidebar = Backbone.View.extend({
  template: JST['sidebar/side'],
  className: 'side-cont',

  initialize: function () {
    this.listenTo(Grounded.followCollection, 'change sync', this.render);
    this.listenTo(Grounded.investedCollection, 'change sync', this.render);
  },

  // events: {
  //   'click .invest_menu' : 'showInvested',
  //   'click .open' : 'hideInvested'
  // },

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
  //
  // showInvested: function () {
  //   this.$('div.invested').addClass('show');
  //   this.$('.invest_menu').addClass('open');
  // },
  //
  // hideInvested: function () {
  //   this.$('div.invested').removeClass('show');
  //   this.$('span.invest_menu').removeClass('open');
  // }
});

// <script>
//   $('.invest_menu').click(function () {
//   })
// </script>
// <script>
//   $('span.invest_menu.open').click(function () {
//   })
// </script>
