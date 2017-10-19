
var headline1;
var image1;
var dataUrl = '/ads';
var adsArray = new Array();

var div1height = -1;
var div2height = -2;
 
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
	
	var outerdiv = document.createElement("div");
	outerdiv.setAttribute("id", "outerdiv");
	
	var div = document.createElement("div");
	div.setAttribute("id", "innerdiv1");
	div.className = "grid-50 mobile-grid-50 tablet-grid-50";
	//div.style.height = "500px";
	
	var h2 = document.createElement("h2");
	h2.innerHTML= adsArray[adIndex].headline;
	div.appendChild(h2);
	
	var image = document.createElement("img");
	image.src = "data:image/png;base64," + adsArray[adIndex].image;
	image.setAttribute('width', '250px');
	image.setAttribute('height', '250px');
	div.appendChild(image);
	
	var br = document.createElement("br");
	div.appendChild(br);
	
	var input1 = document.createElement("input");
	input1.type = "text";
	input1.value = "Price:";
	input1.readOnly = true;
	input1.style.width = '45%';
	div.appendChild(input1);
	
	var input2 = document.createElement("input");
	input2.type = "text";
	input2.value = adsArray[adIndex].price;
	input2.readOnly = true;
	input2.style.width = '45%';
	div.appendChild(input2);
	
	var br = document.createElement("br");
	div.appendChild(br);
	
	var input3 = document.createElement("input");
	input3.type = "text";
	input3.value = "Description:";
	input3.readOnly = true;
	input3.className = "tainput";
	input3.style.width = '45%';
	div.appendChild(input3);
	
	var input4 = document.createElement("TEXTAREA");
	input4.value = adsArray[adIndex].description;
	input4.cols = 45;
	input4.rows = 4;
	input4.readOnly = true;
	input4.className = "textarea";
	input4.style.width = '45%';
	div.appendChild(input4);
	
	outerdiv.appendChild(div);
	
	var div2 = document.createElement("div");
	div2.setAttribute("id", "innerdiv2");
	div2.className = "grid-50 mobile-grid-50 tablet-grid-50";
	//div2.style.height = div.style.height;
	
	document.body.appendChild(outerdiv);
	
	div1height = div.offsetHeight;
	div2.style.height = div1height + 'px';
	
	var input5 = document.createElement("input");
	input5.type = "text";
	input5.value = "Seller Name:";
	input5.readOnly = true;
	input5.style.width = '45%';
	input5.className = "div2content";
	div2.appendChild(input5);
	
	var input6 = document.createElement("input");
	input6.type = "text";
	input6.value = adsArray[adIndex].sellerName;
	input6.readOnly = true;
	input6.style.width = '45%';
	input6.className = "div2content";
	div2.appendChild(input6);
	
	var br2 = document.createElement("br");
	div2.appendChild(br2);
	
	var input7 = document.createElement("input");
	input7.type = "text";
	input7.value = "E-mail:";
	input7.readOnly = true;
	input7.style.width = '45%';
	input7.className = "div2content";
	div2.appendChild(input7);
	
	var input8 = document.createElement("input");
	input8.type = "text";
	input8.value = adsArray[adIndex].email;
	input8.readOnly = true;
	input8.style.width = '45%';
	input8.className = "div2content";
	div2.appendChild(input8);
	
	var br3 = document.createElement("br");
	div2.appendChild(br3);
	
	var input9 = document.createElement("input");
	input9.type = "text";
	input9.value = "Phone Number:";
	input9.readOnly = true;
	input9.style.width = '45%';
	input9.className = "div2content";
	div2.appendChild(input9);
	
	var input10 = document.createElement("input");
	input10.type = "text";
	input10.value = adsArray[adIndex].phoneNumber;
	input10.readOnly = true;
	input10.style.width = '45%';
	input10.className = "div2content";
	div2.appendChild(input10);
	
	
	
	outerdiv.appendChild(div2);
	
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

