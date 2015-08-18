Grounded.Views.Map = Backbone.View.extend({

  tagName: 'div',
  id: 'map-canvas-full-screen',

  initialize: function () {
    this._markers = {};

    this.listenTo(this.collection, 'add', this.addMarker);
  },

  initMap: function () {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 12,
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    if (this.collection) {
      this.collection.each(this.addMarker.bind(this));
    }

    if (this.model) {
      this.addMarker(this.model);
    }
  },

  addMarker: function (property) {
    if (this._markers[property.id]) { return };
    var view = this;

    var marker = new google.maps.Marker({
      position: { lat: property.get('latitude'), lng: property.get('longitude') },
      map: this._map,
      title: property.get('street_number') + ' ' + property.get('street')
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerInfo(event, marker);
    });

    this._markers[property.id] = marker;
  },

  showMarkerInfo: function (event, marker) {
  // This event will be triggered when a marker is clicked. Right now it
  // simply opens an info window with the title of the marker. However, you
  // could get fancier if you wanted (maybe use a template for the content of
  // the window?)

  var infoWindow = new google.maps.InfoWindow({
    content: marker.title
  });

  infoWindow.open(this._map, marker);
}

});
