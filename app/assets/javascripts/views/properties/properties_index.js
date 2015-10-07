Grounded.Views.PropertiesIndex = Backbone.CompositeView.extend({

  className: 'index-parent',

  initialize: function (options) {
    this._subviews = {};
    this.listenTo(this.collection, 'add', this.addPropertyView);
    this.listenTo(this.collection, 'sync', this.addMapSubview);
    this.collection.each(this.addPropertyView.bind(this));
    this.addMapSubview();
    this.addNewPropertyView();
    view = this;
  },

  template: JST['properties/index'],

  events: {
    'click properties': 'removeModal',
    'click div.index-item-box.property' : 'showModal'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.mapSubview.initMap();
    return this;
  },

  addPropertyView: function (property) {
    var subview = new Grounded.Views.PropertiesIndexItem({ model: property });
    this.addSubview('.properties', subview);
    this._subviews[property.id] = subview;
  },

  addMapSubview: function () {
    this.mapSubview = new Grounded.Views.Map({ collection: this.collection });
    this.addSubview('.map', this.mapSubview);
  },

  removeModal: function () {
    this._currentModal && this._currentModal.remove();
  },

  showModal: function (event) {
    this.removeModal();
    var propId = $(event.currentTarget).attr('id');
    var model = this.collection.getOrFetch(propId);
    var subview = new Grounded.Views.PropertyModal({ model: model });
    this.addSubview('.properties-modal', subview);
    this._currentModal = subview;
  },

  showMarkerModal: function (id) {
    view.removeModal();
    var model = view.collection.getOrFetch(id);
    var subview = new Grounded.Views.PropertyModal({ model: model });
    view.addSubview('.properties-modal', subview);
    view._currentModal = subview;
  },

  addNewPropertyView: function () {
    if (Grounded.CURRENT_USER) {
      this.newPropSubview && this.newPropSubview.remove();
      var model = new Grounded.Models.Property();
      this.newPropSubview = new Grounded.Views.NewPropertyIndexItem({
                                                              collection:
                                                              this.collection,
                                                              model: model
                                                                     });
      this.addSubview('.properties', this.newPropSubview);
    } else {
      return;
    }
  }
});
