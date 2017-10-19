


function getData(){
	
	$http.get("/ads").success(function (data) {
    	
		headline1 = data._embedded.ads[i];
		document.getElementById("headline").innerHTML = headline1;
    	
    }).error(function (status) {
        alert(status);
    });
}


var headline1;
var image1;
var dataUrl = '/ads';
var adsArray = new Array();
 
function getFetch(){
	
	fetch(dataUrl)
	 .then(response => response.json())
	 .then(data => {
		 
		for(var i = 0 ; i<data._embedded.ads.length ; i++){
	    		adsArray.push(data._embedded.ads[i]);
	    }
		
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
	div.setAttribute("id", "indexdiv");
	var h2 = document.createElement("h2");
	h2.innerHTML= "Current Ads:";
	div.appendChild(h2);
	
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

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    var date = dd + '/' + mm + '/' + yyyy;
    var time = h + ":" + m + ":" + s;
    document.getElementById('date_time').innerHTML = date + "\n" + time;
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
 
