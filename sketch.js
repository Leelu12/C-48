var button1,button2,button3,button4,button5;
var gameState=0;
var select1;
var greet1;
var radio1;
function setup() {
  createCanvas(windowWidth,windowHeight);
 /*button1=createButton('Vehicals');
 button2=createButton('First-Aid');
 button3=createButton('General Electrical Problems');*/
 select1 = createSelect();
select1.position(400,200)
  //.option([contentValue],[value])
  //If 1 param, it's both content AND
  //value. Values treated as strings.
  select1.option("Vehicals");
  select1.option("First-Aid");
  select1.option("General Electrical Problems");
  //If changed, call select1Changed 
  select1.changed(select1Changed);
 greet1 = createElement('h2');
 
 
 //.option([value], [contentLabel])
 //If 1 param, it's both content AND
 //value. Values treated as strings.
 
}

function draw() {
  background("yellow");
  textSize(30);
  fill("red")
  text("Cure For All" ,750, 90);  
  textSize(20);
  fill("green")
  text("Rules" ,300, 150);
  text("1)Select the proper catogory to your problem." ,180, 200);  
  text("2)Follow sequnce of steps and do not skip any." , 180,250 );
  /*button1.position (180, 300);
  button2.position (250, 300);
  button3.position (180, 350);
  button1.mousePressed(()=>{
    gameState=1;
    if(gameState===1)
    {greeting.html("Select Your Specific Problem ")
     greeting.position(700,150);}
  })*/
  drawSprites();
}
function select1Changed() {
  switch (select1.value()) {
    case "Vehicals":
      category1()
      break;
    case "First-Aid":
      category2()
      break;
    case "General Electrical Problems":
      category3()
      break;
  }
}


function category1(){
  gameState=1
      if(gameState===1){
         /* greet1.html("How to Change a car tyre")
          greet1.position(600,150)*/
          radio1 = createRadio();
         radio1.position(600,150)
          radio1.option(1, "How to change car tyre");
           radio1.option(2, "How to get the car out from a mudy place");
           radio1.value("1")
         
      }
  gameState=0
}

function category2(){
  gameState=1
      if(gameState===1){
          greet1.html("Select subcat2")
          greet1.position(600,150)
         
      }
  gameState=0
}
function category3(){
  gameState=1
      if(gameState===1){
          greet1.html("Select subcat3")
          greet1.position(600,150)
         
      }
      gameState=0
}
