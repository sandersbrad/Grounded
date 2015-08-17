Grounded.Views.FrequentlyAskedQuestions = Backbone.View.extend({

  template: JST['static_pages/faq'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
