Grounded.Views.DescriptionForm = Backbone.View.extend({

  template: JST['forms/description'],
  tagName: 'form',
  className: 'description-form',

  render: function () {
    var content = this.template({ property: this.model })
    this.$el.html(content);
    return this;
  }

});
