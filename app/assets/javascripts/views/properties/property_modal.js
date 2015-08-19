Grounded.Views.PropertyModal = Backbone.View.extend({

  tagName: 'div',
  className: 'property-modal col-md-8',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .close' : 'removeModal',
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
