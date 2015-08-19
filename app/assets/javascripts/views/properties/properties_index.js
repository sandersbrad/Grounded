Grounded.Views.PropertiesIndex = Backbone.CompositeView.extend({

  className: 'index-parent',

  initialize: function (options) {
    this._subviews = {};
    this.listenTo(this.collection, 'add', this.addPropertyView);
    this.listenTo(this.collection, 'sync', this.addMapSubview);
    this.collection.each(this.addPropertyView.bind(this));
    this.addMapSubview();
  },

  events: {
    'click properties': 'removeModal',
    'click div.index-item-box' : 'showModal',
    'click div.map': 'removeModal'
  },

  showModal: function (event) {
    this._currentModal && this._currentModal.removeModal();
    var propId = $(event.currentTarget).attr('data');
    this._currentModal = this._subviews[propId].showModal();
  },

  removeModal: function () {
    this._currentModal && this._currentModal.removeModal();
  },

  addPropertyView: function (property) {
    debugger
    var subview = new Grounded.Views.PropertiesIndexItem({ model: property });
    this.addSubview('.properties', subview);
    this._subviews[property.id] = subview;
  },

  addMapSubview: function () {
    this.mapSubview = new Grounded.Views.Map({ collection: this.collection });
    this.addSubview('.map', this.mapSubview);
  },

  template: JST['properties/index'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.mapSubview.initMap();
    return this;
  }
});
