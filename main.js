objectDetector= "";

img = "";
objects = [];
status = "";

function preload()
{
 img = loadImage("dog_cat.jpg")   
}

function setup()
{
 canvas =createCanvas(640,420);
 canvas.center();
 objectdectecter = ml5.objectdectecter('cocossod', modelLoaded);
 document.getElementById("status").innerHTML = "Status = Detecting Objects";

}

function modelLoaded()
{
 console.log("Model is Loaded");
 status  = true;
 objectdectecter.detect(img, gotResult);
}

function gotResult(error ,results)
{
if (error)
{
 console.log(error); 
}
console.log(results);
}

function draw()
{
  image(img,0,0,640,420);
  fill("#e61515");
  text("Dog",45,75);
  noFill();
  stroke("#e61515");
  rect(30,60,450,350);
  
  fill("#e61515");
  text("Cat",320,120);
  noFill();
  stroke("#e61515");
  rect(300,90,270,320);

  image(img, 0, 0, 640, 420);

  if(status != "")
  {
    for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Object Detected";

      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
}