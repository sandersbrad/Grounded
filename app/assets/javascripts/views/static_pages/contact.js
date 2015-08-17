Grounded.Views.Contact = Backbone.View.extend({

  template: JST['static_pages/contact'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
