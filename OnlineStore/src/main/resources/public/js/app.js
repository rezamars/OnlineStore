


function getData(){
	
	$http.get("/ads").success(function (data) {
    	
		headline1 = data._embedded.ads[i];
		document.getElementById("headline").innerHTML = headline1;
    	
    }).error(function (status) {
        alert(status);
    });
}

/*
function get_(url, func)
{
 var http;
 try { http = new XMLHttpRequest(); } catch (e) { try { http = new ActiveXObject(\"Msxml2.XMLHTTP\"); } catch (e) { try { http = new ActiveXObject(\"Microsoft.XMLHTTP\"); } catch (e) { alert(\"Your browser broke!\"); return false; } } }

 http.open(\"GET\", url, true);
 http.onreadystatechange = function() { if(http.readyState == 4) { func(http); } }
 http.send(null);
}
 */

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
		/*
		headline1 = adsArray[1].headline;
		document.getElementById("headline").value = headline1;
		
		image1 = adsArray[1].image;
		document.getElementById("image1").src = "data:image/png;base64," + image1;
		*/
		createListOfAds();
		
	 })
	 .catch(err => {
	     console.error('An error ocurred', err);
	 });
}

var links = new Array();
var clickedAdIndex = -1;

function createListOfAds(){
	
	var div = document.createElement("div");
	var h2 = document.createElement("h2");
	h2.innerHTML= "Current Ads:";
	div.appendChild(h2);
	
	//var kashk = -1;
	
	for(var i = 0 ; i < adsArray.length ; i++){
		
		var kashk = i;
		
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
		saveIndex(link,i);
		
		links.push(link);
		console.log(imgUrl);
		div.appendChild(link);
		
		var input = document.createElement("input");
		input.type = "text";
		input.className = "headline";
		input.value = adsArray[i].headline;
		div.appendChild(input);
		
	}
	
	document.body.appendChild(div);
	
}

function saveIndex(link,index){
	
	link.onclick = function () {
		var indexOfAd = {'clickedAdIndex':index};
		sessionStorage.setItem('adindex', JSON.stringify(indexOfAd));
	}
	
}
 
