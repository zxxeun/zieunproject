function initialize() {
			  var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: new google.maps.LatLng(37.514155,126.907273)
			  };
			  var map = new google.maps.Map(document.getElementById('goolgeMap'),
				  mapOptions);
			  var marker = new google.maps.Marker({
				position: map.getCenter(),
				animation:google.maps.Animation.BOUNCE,
				icon: 'img/locred.png',
				map: map
			  });
			}
			google.maps.event.addDomListener(window, 'load', initialize);