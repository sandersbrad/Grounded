Grounded.Views.PropertyModal = Backbone.CompositeView.extend({

  template: JST['properties/modal'],
  tagName: 'div',
  className: 'property-modal',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.current_user_follow(), 'change', this.render);
    this.listenTo(this.model.current_user_invested(), 'change', this.render);
    this.listenTo(this.model.images(), 'add', this.render);
    // this.addMap();
  },

  events: {
    'click .close' : 'remove',
    'click .toggle_follow': 'toggleFollow',
    'click .toggle_invest': 'showInvestForm',
    'submit form.inv-form': 'investProperty',
    'click .upload_image' : 'uploadImage',
    'click .edit' : 'showDescriptionForm',
    'submit form.description-form': 'describeProperty'
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
      this.$('.default-image').html('<img src=' + this.model.images().toArray()[0].get('image_url') + ' height=300 width=250>');
    }
  },

  addZillowChart: function () {
    this.$('.zillow-chart').html('<img src=' + this.model.get('zillow_chart') + ' style="float: right;">');
  },


  showInvestForm: function () {
    this.investFormView && this.removeSubview('.modal-invest-form', this.investFormView);
    this.investFormView = new Grounded.Views.InvestForm({ model: this.model });
    this.addSubview('.modal-invest-form', this.investFormView);
  },

  showDescriptionForm: function () {
    this.$('.desc').empty();
    this.descriptionForm = new Grounded.Views.DescriptionForm({ model: this.model });
    this.$('.desc').html(this.descriptionForm.render().$el)
  },

  investProperty: function (event) {
    event.preventDefault();
    var percentage = $(event.currentTarget).find('input[type=number]').val();

    var investmentAttrs = {
      property_id: this.model.id,
      user_id: Grounded.CURRENT_USER.id,
      percentage: percentage
    };

    var investment = this.model.current_user_invested();

    that = this;
    investment.save(investmentAttrs, {
      success: function () {
        Grounded.investedCollection.add(that.model);
        that.model.investments().add(investment);
        that.investFormView.remove();
        bootbox.alert("Great!  A representative will contact you within 24 hours to finalize your investment.");
      }
    });
    if (this.model.current_user_follow()) {
      this.unfollowProperty();
    }
  },

  followProperty: function() {
    this.model.current_user_follow().save({ property_id: this.model.id,
                                            user_id: Grounded.CURRENT_USER.id },
                                          { success: function () {
                                              Grounded.followCollection.add(this.model);
                                            }.bind(this),
                                          });
  },

  describeProperty: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var that = this
    this.model.save(formData, {
      success: function () {
        that.removeSubview('.desc-form', that.descriptionForm);
        that.render();
      }
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

  uploadImage: function () {
    var cloud_name = Grounded.cloud_name;
    var upload_preset = Grounded.upload_preset;

    that = this;
    cloudinary.openUploadWidget({ upload_preset: upload_preset,
                                 cloud_name: cloud_name },
                                 function(error, result) {
                                   var thumb_url = result[0].thumbnail_url;
                                   var image_url = result[0].url;
                                   var property_id = this.model.id;
                                   var image = new Grounded.Models.Image ({
                                     image_url: image_url,
                                     thumb_url: thumb_url,
                                     property_id: property_id
                                   });

                                   image.save({},{
                                     success: function () {
                                       that.model.images().add(image);
                                     }
                                   });
                                 }.bind(this));
  },

  // addMap: function () {
  //   this.mapView = new Grounded.Views.Map({ model: this.model });
  //   this.addSubview('.modal-map', this.mapView);
  //   this.mapView.initMap();
  // }

});
