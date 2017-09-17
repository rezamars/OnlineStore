
var headline1;
var image1;
var dataUrl = '/ads';
var adsArray = new Array();
 
function getFetch(){
	
	fetch(dataUrl)
	 .then(response => response.json())
	 .then(data => {
		 
		console.log("length: " + data._embedded.ads.length);
		for(var i = 0 ; i<data._embedded.ads.length ; i++){
	    		adsArray.push(data._embedded.ads[i]);
	    }
		
		createAd();
		
	 })
	 .catch(err => {
	     console.error('An error ocurred', err);
	 });
}

function createAd(){
	
	var ssObject = JSON.parse(sessionStorage.adindex);
	var adIndex = ssObject.clickedAdIndex;
	var div = document.createElement("div");
	var h2 = document.createElement("h2");
	h2.innerHTML= adsArray[adIndex].headline;
	div.appendChild(h2);
	/*
	for(var i = 0 ; i < adsArray.length ; i++){
		
		var br = document.createElement("br");
		div.appendChild(br);
		
		var image = document.createElement("img");
		image.src = "data:image/png;base64," + adsArray[i].image;
		image.setAttribute('width', '50px');
		image.setAttribute('height', '50px');
		
		var userId;
		userId = (Math.random() + 1).toString(36).substring(5, 15);
		var siteUrl = window.location.href  ;
		var imgUrl = siteUrl + userId;
		var linkUrl = siteUrl;
		var link = document.createElement('a');
		//link.setAttribute('href', imgUrl);
		link.setAttribute('href', "ad.html");
		link.appendChild(image);
		console.log(imgUrl);
		div.appendChild(link);
		
		var input = document.createElement("input");
		input.type = "text";
		input.className = "headline";
		//input.setAttribute('padding-bottom', '13px');
		input.value = adsArray[i].headline;
		div.appendChild(input);
		
	}
	*/
	document.body.appendChild(div);
	
}
 
