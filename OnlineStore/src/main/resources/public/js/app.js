


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
 
function getFetch(){
	
	fetch(dataUrl)
	 .then(response => response.json())
	 .then(data => {
		headline1 = data._embedded.ads[0].headline;
		document.getElementById("headline").value = headline1;
		
		image1 = data._embedded.ads[0].image;
		document.getElementById("image1").src = "data:image/png;base64," + image1;
		
		
	 })
	 .catch(err => {
	     console.error('An error ocurred', err);
	 });
}
 
