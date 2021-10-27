Webcam.set({
   width:350 ,
   height:300 ,
   image_format: "png" ,
   png_quality: 90  
});

camera = document.getElementById("camera");

Webcam.attach("#camera") ;

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>' ; 
    });
}

 console.log('ml5 version',ml5.version);

 trained = ml5.imageClassifier("https://storage.googleapis.com/tm-model/wVK6is1Bf/model.json",Model_Loaded);

 function Model_Loaded(){
     console.log("MODEL LOADED !!!");
 }