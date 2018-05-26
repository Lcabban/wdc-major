function initMap() {
	var i;
	var url_string = window.location.href;
	var url = new URL(url_string);
	var loc = url.searchParams.get("search");
	if (loc === '') {
		loc="Adelaide";
	}
	
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': loc}, function(results, status) {
		if (status === 'OK') {
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: results[0].geometry.location,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		}
		var locations = [
			['<div class="info_content">' +
			'<img src="hotelimg2.jpg" alt="Hotel image" height="81" width="144">' +
			'<h3>Ibis Adelaide</h3>' +
			"<p>122 Grenfell St, 5000</p>" +
			'<p>Rooms starting at $115 per night</p>' +
			'</div>',
			-34.9238855,
			138.6042433],
			['<div class="info_content">' +
			'<img src="hotelimg2.jpg" alt="Hotel image" height="81" width="144">' +
			'<h3>Hilton Hotel Adelaide</h3>' +
			"<p>233 Victoria Square, 5000</p>" +
			'<p>Rooms starting at $159 per night</p>' +
			'</div>',
			-34.9291341, 138.5986979]
		];


		var infowindow = new google.maps.InfoWindow();

		for (i = 0; i < locations.length; i++) {  
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map: map
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
			}
		})(marker, i));
		}
	});
}