
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

        reader.onload = function (e) {
        	
        	var newimage = new Image();
			newimage.src = e.target.result;
			console.log("the width is: " + newimage.width + " and the height is: " + newimage.height);
			picHeight = newimage.height;
			picWidth = newimage.width;
			
            $('#adimage')
                .attr('src', e.target.result)
                .width(200)
                .height(200);
            
            console.log(input.files[0]);
            //console.log(e.target.result.onload["[[Scopes]]"]["0"].innerHeight);
        };
        
        
        //alert(picHeight + ", " + picWidth);

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
    	
    	//alert(picture.src);
    	
    	objToSaveInDB.headline = headline;
    	objToSaveInDB.price = price;
    	objToSaveInDB.description = description;
    	objToSaveInDB.sellerName = sellername;
    	objToSaveInDB.phoneNumber = phonenumber;
    	objToSaveInDB.email = email;
    	
    	//var fileReader = new FileReader();
    	//var blob = new Blob([JSON.stringify(picture)],{type: "image/*"});
    	//var blob = new Blob([picture.src],{type: "image/*"});
    	
    	/*
    	var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

	    // Make sure canvas is as big as the picture
	    imgCanvas.width = picture.width;
	    imgCanvas.height = picture.height;
	
	    // Draw image into canvas element
	    imgContext.drawImage(picture, 0, 0, picture.width, picture.height);
	
	    // Get canvas contents as a data URL
	    var imgAsDataURL = imgCanvas.toDataURL("image/*");
	
	    // Save image into localStorage
	    try {
	        //localStorage.setItem("elephant", imgAsDataURL);
	    	var encodedData = window.atob(imgAsDataURL);
	        objToSaveInDB.image = encodedData;
	    }
	    catch (e) {
	        console.log("Storage failed: " + e);
	    }
	    */
    	/*
    	try {
            var file = new File([text], "adimg" , {type:"text/plain"});
        } catch(e) {
            // when File constructor is not supported
            file = new Blob([text], {type:"text/plain"});
        }
        var url  = window.URL.createObjectURL(file);
        */
        //var url = URL.createObjectURL(new Blob([picture] , {type:'image/png'}));
    	//var bin = window.atob(picture.data);
    	//objToSaveInDB.image = bin;
        
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
        var dataURL = canvas.toDataURL("image/*");

        var imgsave = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    	
    	objToSaveInDB.image = imgsave;
    	
    	// Generate the image data
    	//var Pic = picture.toDataURL("image/png");
        //Pic = Pic.replace(/^data:image\/(png|jpg);base64,/, "")
        
        /*
        // Sending the image data to Server
        $.ajax({
        	type: 'POST',
        	url: '/ads',
        	//data: '{ "imageData" : "' + Pic + '" }',
        	data: '{ "image" : "' + Pic + '" }',
        	contentType: 'application/json; charset=utf-8',
        	dataType: 'json',
        	success: function (msg) {
        		alert("Done, Picture Uploaded.");
        	}
        });
        */
        //picture.src = "data:image/png;base64," + picture;
    	
    	//objToSaveInDB.image = picture;
        
    	//objToSaveInDB.image = fileReader.readAsDataURL(blob);
    	//objToSaveInDB.image = blob;
    	
    	// Getting a file through XMLHttpRequest as an arraybuffer and creating a Blob
    	
    	//var rhinoStorage = localStorage.getItem("rhino"),
    	//var rhino = document.getElementById("rhino");
    	
    	/*
    	if (0) {
    	    // Reuse existing Data URL from localStorage
    	    //rhino.setAttribute("src", rhinoStorage);
    	}
    	else {
    	    // Create XHR, Blob and FileReader objects
    	    var xhr = new XMLHttpRequest(),
    	        blob,
    	        fileReader = new FileReader();

    	    xhr.open("GET", picture, true);
    	    // Set the responseType to arraybuffer. "blob" is an option too, rendering manual Blob creation unnecessary, but the support for "blob" is not widespread enough yet
    	    xhr.responseType = "arraybuffer";
    	    
    	    /*
    	    blob = new Blob([xhr.response], {type: "image/*"});
            
            objToSaveInDB.image = picture;
            alert(objToSaveInDB.image);
            
            
    	    xhr.addEventListener("load", function () {
    	    	alert(xhr.status);
    	        if (xhr.status === 200) {
    	            // Create a blob from the response
    	            blob = new Blob([xhr.response], {type: "image/*"});
    	            
    	            alert('after blob');
    	            // onload needed since Google Chrome doesn't support addEventListener for FileReader
    	            fileReader.onload = function (evt) {
    	                // Read out file contents as a Data URL
    	                var result = evt.target.result;
    	                // Set image src to Data URL
    	                //rhino.setAttribute("src", result);
    	                picture.setAttribute("src", result);
    	                alert(picture);
    	                // Store Data URL in localStorage
    	                try {
    	                    //localStorage.setItem("rhino", result);
    	                    objToSaveInDB.image = picture;
    	                    alert(objToSaveInDB.image);
    	                }
    	                catch (e) {
    	                    console.log("Storage failed: " + e);
    	                }
    	            };
    	            // Load blob as Data URL
    	            fileReader.readAsDataURL(blob);
    	        }
    	    }, false);
    	    
    	    // Send XHR
    	    xhr.send();
    	}
    	*/
    	/*
    	
    	$scope.dataURLtoBlob = function dataURLtoBlob (dataURL) {
    		/*
    		//Decode the dataURL
    		var binary = atob(dataURL.split(',')[1]);
    		// Create 8-bit unsigned array
    		var array = [];
    		var i = 0;
    		while (i < binary.length){
    			array.push (binary.charCodeAt(i));
    			i++;
    		}
    		*/
    	/*
    		fetch(dataURL)
    		  .then(function(response) {
    		    return response.blob()
    		  })
    		  .then(function(blob) {
    		    // here the image is a blob
    			  //new Blob([ new Uint8Array(dataURL) ]);
    		  });
    		// Return our Blob object
    		//new Blob([ new Uint8Array(array) ], type: 'image/png');
    		//new Blob([ new Uint8Array(dataURL) ]);
    	}
    	
    	var file = $scope.dataURLtoBlob(picture);
    	
    	objToSaveInDB.image = file;
    	
    	*/
    	
    	//objToSaveInDB.image = pic;
	    
	    $http.post(('/ads'),objToSaveInDB).success(function (data) {
    		location.reload();
    		alert('Successfully created new data!')
            
        }).error(function (status) {
            alert(status);
	    
        });
	}
	
	
});



/*

function saveToDB() {
	
	var orgAdsList = new Array();
	var objToSaveInDB = new Array();
	
	//get call to get the datas
    $http.get("/ads").success(function (data) {
    	
    	//a loop to store all datas in adsList received from database
    	for(var i = 0 ; i<data._embedded.ads.length ; i++){
    		orgAdsList.push(data._embedded.ads[i]);
    	}
    	
    }).error(function (status) {
        alert(status);
    });
    
    
	/*
	var xmlhttp;
	var orgAdsList = new Array();
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    alert(xmlhttp.responseText);
	    }
	  }
	xmlhttp.open("GET","http://localhost:9090/ads",true);
	xmlhttp.responseType = "json";

	xmlhttp.onload = function (oEvent) {
	  var arrayBuffer = xmlhttp.response; // Note: not oReq.responseText
	  alert(arrayBuffer);
	  if (arrayBuffer) {
	    var byteArray = new Uint8Array(arrayBuffer);
	    alert(byteArray.byteLength);
	    for (var i = 0; i < byteArray.byteLength; i++) {
	    	orgAdsList.push(byteArray[i]);
	    	alert(byteArray[i]);
	    }
	  }
	};
	
	xmlhttp.send();
	*/
	/*
	let url = '/ads';

	fetch(url)
	.then(res => res.json())
	.then((out) => {
	  console.log('Checkout this JSON! ', out);
	})
	.catch(err => { throw err });
    
    var headline = document.getElementById('headline').value;
    */
    //alert(orgAdsList[0]);
    
	/*
	if(okeyBoolean == true){
		//post request to store the data in database
    	$http.post(('/ads'),objToSaveInDB).success(function (data) {
    		location.reload();
    		alert('Successfully saved new data!')
            
        }).error(function (status) {
            alert(status);    
     });
	}
	else{
		alert('Something wrong! Check your fields.');
	}
	*/
	/*
	// simple cross-browser ajax helper
	var ajaxGet = function (url, callback) {
	    var callback = (typeof callback == 'function' ? callback : false), xhr = null;
	    try {
	      xhr = new XMLHttpRequest();
	    } catch (e) {
	      try {
	        xhr = new ActiveXObject("Msxml2.XMLHTTP");
	      } catch (e) {
	        xhr = new ActiveXObject("Microsoft.XMLHTTP");
	      }
	    }
	    if (!xhr)
	           return null;
	    xhr.open("GET", url,true);
	    xhr.onreadystatechange=function() {
	      if (xhr.readyState==4 && callback) {
	    	  alert(xhr.responseText);
	        callback(xhr.responseText)
	      }
	    }
	    xhr.send(null);
	    return xhr;
	}

	// example usage, grab the json data, loop it and log red_world_id to console
	ajaxGet(
	    'http://localhost:9090/ads', 
	    function (response) {
	        response = JSON.parse(response);
	        if (!response)
	            return;
	        var i, list = response.wvw_matches;
	        for (i in list) {
	            console.log(list[i].red_world_id); // outputs an id
	        }
	});
	*/
//}

/*
$( document ).ready(function() {
	
	// GET REQUEST
	$("#getAllCustomerId").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "http://localhost:9090/ads",
			success: function(result){
				if(result.status == "Done"){
					/*$('#getResultDiv ul').empty();
					var custList = "";
					$.each(result.data, function(i, customer){
						var customer = "- Customer with Id = " + i + ", firstname = " + customer.firstname + ", lastName = " + customer.lastname + "<br>";
						$('#getResultDiv .list-group').append(customer)
			        });
					console.log("Success: ", result);
				}else{
					//$("#getResultDiv").html("<strong>Error</strong>");
					alert(result.status);
					console.log("Fail: ", result);
				}
			},
			error : function(e) {
				//$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})*/
