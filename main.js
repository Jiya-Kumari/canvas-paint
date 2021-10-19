canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="";
var lastPositionX,lastPositionY;
color="black";
width=2;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    positionX=e.clientX-canvas.offsetLeft;
    positionY=e.clientY-canvas.offsetTop;
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    if(mouseevent=="mousedown"){
        console.log("current position of x and y cordinates= ");
        console.log("x= "+current_position_of_mouse_x+"y= "+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastPositionX,lastPositionY);
        ctx.lineTo(positionX,positionY);
        ctx.stroke();
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius=0,Math.PI);
        ctx.stroke;
    }
    lastPositionX=positionX;
    lastPositionY=positionY;
}