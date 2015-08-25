Grounded.Collections.Images = Backbone.Collection.extend({

  url: 'api/properties',

  model: Grounded.Models.Image,

  getOrFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new Grounded.Models.Property();
      this.add(model);
    }
    model.fetch();
    return model;
  }

});
