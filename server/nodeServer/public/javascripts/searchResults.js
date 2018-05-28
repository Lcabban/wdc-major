var i, j;

var className = [	"searchResult",
					"searchImg",
					"searchTxt",
					"srName",
					"srReview",
					"srAddress",
					"bookDiv"
					];
var appendTo = [	"",
					"searchResult",
					"searchResult",
					"searchTxt",
					"searchTxt",
					"searchTxt",
					"searchTxt"];
					
var populate = [	"",
					'<img src="hotelimg2.jpg" alt="Hotel image" height="135" width="240">',
					"",
					"<h2>The fake hotel</h2>",
					"<p>&#9733 &#9733 &#9733 &#9733 &#9734 </p>",
					"<p>12 fake street</p>",
					'<form action="hotel.html"><button type="submit">Book now!</button></form>'
					];
for (i = 0; i < className.length; i++) {
	for (j = 0; j < 10; j++) {
		var newDiv = document.createElement("div");
		newDiv.className = className[i];
		if (i === 0) {
			document.getElementById("leftDiv").appendChild(newDiv);
		}
		else {
			document.getElementsByClassName(appendTo[i])[j].appendChild(newDiv);
		}
		newDiv.innerHTML = populate[i];
	}
}