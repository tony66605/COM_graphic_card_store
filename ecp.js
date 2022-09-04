document.getElementById("demo1").onmouseenter = function() {mouseEnter1()};
document.getElementById("demo1").onmouseleave = function() {mouseLeave1()};
document.getElementById("demo2").onmouseenter = function() {mouseEnter2()};
document.getElementById("demo2").onmouseleave = function() {mouseLeave2()};
document.getElementById("demo3").onmouseenter = function() {mouseEnter3()};
document.getElementById("demo3").onmouseleave = function() {mouseLeave3()};
document.getElementById("demo4").onmouseenter = function() {mouseEnter4()};
document.getElementById("demo4").onmouseleave = function() {mouseLeave4()};
function mouseEnter1() {
  document.getElementById("demo1").style.color="pink";
}

function mouseLeave1() {
  document.getElementById("demo1").style.color = "black";
}
function mouseEnter2() {
    document.getElementById("demo2").style.color="blue";
  }
  
  function mouseLeave2() {
    document.getElementById("demo2").style.color = "black";
  }
  function mouseEnter3() {
    document.getElementById("demo3").style.color="orange";
  }
  
  function mouseLeave3() {
    document.getElementById("demo3").style.color = "black";
  }
  function mouseEnter4() {
    document.getElementById("demo4").style.color="green";
  }
  
  function mouseLeave4() {
    document.getElementById("demo4").style.color = "black";
  }
  var header =document.querySelector("#x")
header.style.color='blue'
function getRandomColor()
{
    var letters ="0123456789ABCDEF";
    var color="#";
    for(var i=0;i<6;i++)
    {
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color
}
function changeHeaderColor()
{
    colorInput =getRandomColor()
    header.style.color = colorInput;
}
setInterval("changeHeaderColor()",500);



