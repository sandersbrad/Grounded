Grounded.Views.Map = Backbone.CompositeView.extend({

  tagName: 'div',
  id: 'map-canvas-full-screen',

  initialize: function () {
    this._markers = {};

    this.listenTo(this.collection, 'add', this.addMarker);
  },

  initMap: function () {
    var mapOptions = {
      center: { lat: 37.77, lng: -122.5 },
      zoom: 12,
      scrollwheel: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.BOTTOM_RIGHT
      },
      panControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_RIGHT
      },
      streetViewControl: true,
    };

    this._map = new google.maps.Map(this.el, mapOptions);

    this._map.get('streetView')
    .setOptions({panControlOptions:  this._map.get('panControlOptions'),
                 zoomControlOptions: this._map.get('zoomControlOptions')});

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
      position: { lat: property.get('latitude'),
                  lng: property.get('longitude') },
      map: this._map,
      title: property.get('street_number') + ' ' + property.get('street'),
      property: property.id
    });

    google.maps.event.addListener(marker, 'mouseover', function (event) {
      view.scrollToInfo(event, marker, property);
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerModal(property.id);
    });

    this._markers[property.id] = marker;
  },

  scrollToInfo: function (event, marker, property) {
    $('#' + property.get('id')).animatescroll({ element:'html,body',
                                                padding: 50,
                                                easing: 'easeInOutCubic' });

  },

  showMarkerModal: function (id) {
    Grounded.Views.PropertiesIndex.prototype.showMarkerModal(id)
  },

});
