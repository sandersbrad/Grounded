Grounded.Views.NewPropertyIndexItem = Backbone.View.extend({

  template: JST['forms/new_prop_index_item'],
  tagName: 'div',
  className: 'property_index_item container-fluid',

  events: {
    'submit form' : 'addProperty',
    'click h5' : 'showForm'
  },

  initialize: function () {
    this.model = new Grounded.Models.Property();
  },

  render: function () {
    var content = this.template({ property: this.model });
    this.$el.html(content);
    return this;
  },

  addProperty: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData, {
      success: function () {
        this.collection.add(this.model);
        $('.new_prop_index_item').removeClass('show');
      }.bind(this),
      error: function (model, response, other) {
        console.log(response);
      }
    });
  },

  showForm: function () {
    $('.new_prop_index_item').addClass('show');
  }

});
