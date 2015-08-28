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
        this.showForm();
        bootbox.alert("Thanks for submitting a new property.  A representative will contact you within 48 hours to finalize your initial investment.  In the meantime, we'll add your property to our index and start attracting co-owners!");
      }.bind(this),
      error: function (model, response, other) {
        if (response.status === 500) {
          this.$('.errors').html("Invalid Address / No Zillow Data");
        } else {
          this.$('.errors').html(response.responseText.replace('["',"").replace('"]',""));
        }
      }
    });
  },

  showForm: function () {
    this.$('.new_prop_index_item').toggleClass('show');
    this.$('.glyphicon.glyphicon-plus').toggleClass('hide');
    this.$('.glyphicon.glyphicon-minus').toggleClass('hide');
    this.$('.errors').empty();
  }

});
