Grounded.Collections.Properties = Backbone.Collection.extend({

  url: 'api/properties',

  model: Grounded.Models.Property,

  comparator: function (model) {
    return -model.id;
  },

  getOrFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new Grounded.Models.Property({id: id});
      this.add(model);
    }
    model.fetch();
    return model;
  }

});
