Grounded.Views.PropertyModal = Backbone.CompositeView.extend({

  template: JST['properties/modal'],
  tagName: 'div',
  className: 'property-modal',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.current_user_follow(), 'change', this.render);
    this.listenTo(this.model.current_user_invested(), 'change', this.render);
  },

  events: {
    'click .close' : 'remove',
    'click .toggle_follow': 'toggleFollow',
    'click .toggle_invest': 'showInvestForm',
    'submit form': 'investProperty'
  },

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    this.onRender();
    this.attachSubviews();
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


  showInvestForm: function () {
    var view = new Grounded.Views.InvestForm({ model: this.model });
    this.addSubview('.prop-modal-btns', view);
  },
  
  investProperty: function (event) {
    event.preventDefault();
    var percentage = $(event.currentTarget).find('input[type=number]').val();

    var investmentAttrs = {
      property_id: this.model.id,
      user_id: Grounded.CURRENT_USER.id,
      percentage: percentage
    };

    this.model.current_user_invested().save(investmentAttrs, {
      success: function () {
        Grounded.investedCollection.add(this.model);
      }.bind(this)
    });
    if (this.model.current_user_follow()) {
      this.unfollowProperty();
    }
    this.remove();
  },

  followProperty: function() {
    this.model.current_user_follow().save({ property_id: this.model.id,
                                            user_id: Grounded.CURRENT_USER.id },
                                          { success: function () {
                                              Grounded.followCollection.add(this.model);
                                            }.bind(this),
                                          });
  },

  toggleFollow: function (event) {
    if (this.model.isFollowed()){
      this.unfollowProperty();
    } else {
      this.followProperty();
    }
  },

  unfollowProperty: function () {
    this.model.current_user_follow().destroy({
      success: function () {
        Grounded.followCollection.remove(this.model);
      }.bind(this)
    });
    this.model.current_user_follow().clear();
  },

});
