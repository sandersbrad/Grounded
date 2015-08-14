Grounded.Views.PropertyShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.images(), 'add', this.render);
  },

  template: JST['properties/show'],

  events: {
    'click .upload_image': 'uploadImage'
  },

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    debugger
    return this;
  },

  uploadImage: function () {
    var cloud_name = Grounded.cloud_name;
    var upload_preset = Grounded.upload_preset;

    cloudinary.openUploadWidget({ upload_preset: upload_preset,
                                 cloud_name: cloud_name },
                                 function(error, result) {

                                   var thumb_url = result[0].thumbnail_url;
                                   var image_url = result[0].url;
                                   var property_id = this.model.id;
                                   var model = new Grounded.Models.Image ({
                                     image_url: image_url,
                                     thumb_url: thumb_url,
                                     property_id: property_id
                                   });

                                   model.save({},{});
                                 }.bind(this));
  },



});
