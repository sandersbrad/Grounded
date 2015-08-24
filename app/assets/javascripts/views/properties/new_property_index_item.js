Grounded.Views.NewPropertyIndexItem = Backbone.View.extend({

  template: JST['properties/new_index'],
  tagName: 'div',
  className: 'property_index_item container-fluid',

  events: {
    'click button.addProperty' : 'addProperty'
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
    var formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData, {
      success: this.collection.add(this.model)
    }.bind(this));
  }

});
