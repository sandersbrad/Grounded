Grounded.Collections.FollowedProperties = Backbone.Collection.extend({

  url: 'api/properties/followed',

  model: Grounded.Models.Property,

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
