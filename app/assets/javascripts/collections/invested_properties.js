Grounded.Collections.InvestedProperties = Backbone.Collection.extend({

  url: 'api/properties',

  model: Grounded.Models.Property,

  initialize: function (options) {
    this.user = options.user;
  },

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
