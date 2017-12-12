
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

var pic ;
var picHeight;
var picWidth;

function readURL(input) {
	
	picHeight = 0;
	picWidth = 0;
	
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var newimage = new Image();
        
        reader.onload = function (e) {
        	
			newimage.src = e.target.result;
			
			newimage.onload = function() {
				//console.log("the width is: " + newimage.width + " and the height is: " + newimage.height);
				picHeight = newimage.height;
				picWidth = newimage.width;
		    };
		    
			
			
            $('#adimage')
                .attr('src', e.target.result)
                .width(200)
                .height(200);
            
         };
        
        
        reader.readAsDataURL(input.files[0]);
        pic = input.files[0];
        
    }
}

function adjustdivheight() {
	var div1 = document.getElementById('innerdiv3');
	var div2 = document.getElementById('innerdiv4');
	var div1height = div1.offsetHeight;
	div2.style.height = div1height + 'px';
}

var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope,$http) {
	
	
	var orgAdsList = new Array();
	var objToSaveInDB = new Array();
	$scope.adsorg = new Array();
	
	//get call to get the datas
    $http.get("/ads").success(function (data) {
    	
    	//a loop to store all datas in adsList received from database
    	for(var i = 0 ; i<data._embedded.ads.length ; i++){
    		orgAdsList.push(data._embedded.ads[i]);
    	}
    	
    	$scope.adsorg = orgAdsList;
    	
    	
    }).error(function (status) {
        alert(status);
    });
    
    
	
	$scope.createData = function createData() {
		
		
		
	    var indexId = $scope.adsorg.length;
	    
    	objToSaveInDB = $scope.adsorg[0];
    	
    	var headline = document.getElementById('headline').value;
    	var price = document.getElementById('price').value;
    	var description = document.getElementById('description').value;
    	var sellername = document.getElementById('name').value;
    	var phonenumber = document.getElementById('number').value;
    	var email = document.getElementById('email').value;
    	var picture = document.getElementById('adimage');
    	
    	objToSaveInDB.headline = headline;
    	objToSaveInDB.price = price;
    	objToSaveInDB.description = description;
    	objToSaveInDB.sellerName = sellername;
    	objToSaveInDB.phoneNumber = phonenumber;
    	objToSaveInDB.email = email;
    	
    	
    	// Create an empty canvas element
        var canvas = document.createElement("canvas");
        canvas.width = picWidth;
        canvas.height = picHeight;

        // Copy the image contents to the canvas
        var ctx = canvas.getContext("2d");
        ctx.drawImage(picture, 0, 0);

        // Get the data-URL formatted image
        // Firefox supports PNG and JPEG. You could check img.src to
        // guess the original format, but be aware the using "image/jpg"
        // will re-encode the image.
        var dataURL = canvas.toDataURL("image/png");

        var imgsave = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    	
    	objToSaveInDB.image = imgsave;
    	
    	
	    
	    $http.post(('/ads'),objToSaveInDB).success(function (data) {
    		location.reload();
    		alert('Successfully created new data!')
            
        }).error(function (status) {
            alert(status);
	    
        });
	}
	
	
});


