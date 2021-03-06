Grounded.Views.PropertyShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.model, 'sync', this.makeRequest);
  },

  template: JST['properties/show'],

  events: {
    'click .upload_image': 'uploadImage'
  },

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    if(this.model.images().length > 0){
      this.$('.carousel-inner').empty();
      this.model.images().forEach(function (image) {
        this.addCarouselImage(image.escape('image_url'));
      }.bind(this));

      this.$('.item:first').addClass('active');
    }
    this.addZillowChart();
  },

  addCarouselImage: function (image_url) {
    var $carousel = this.$('.carousel-inner');
    $carousel.append('<div class="item"><img u="image" src=' + image_url + '></div>');
  },

  addZillowChart: function () {
    this.$('.zillow-chart').html('<img src=' + this.model.get('zillow_chart') + '>')
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
  }
});
