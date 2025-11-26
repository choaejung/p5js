function setup() {
  createCanvas(400, 400);

frameRate(5)
colorMode(RGB, 255)
}

function draw(){
  background(255)
  let offset_x=15*sin(frameCount*0.5)
  let offset_y=5*cos(frameCount*0.8)
  let offset_z=10*cos(frameCount*0.8)
  let size=15*sin(frameCount*0.8)
  let size2=5*cos(frameCount*0.4)
stroke(0)
line(5+offset_x,45,200-offset_x,45)
line(5+offset_x,85,200-offset_x,85)
line(5+offset_x,105,200-offset_x,105)
line(5+offset_x,125,200-offset_x,125)
line(5+offset_x,145,200-offset_x,145)
line(5+offset_x,165,200-offset_x,165)
line(5+offset_x,185,200-offset_x,185)
line(5+offset_x,205,200-offset_x,205)
line(205+offset_x,5,205-offset_x,205)  
line(225+offset_x,5,225-offset_x,205) 
line(245+offset_x,5,245-offset_x,205)
line(265+offset_x,5,265-offset_x,205) 
line(285+offset_x,5,285-offset_x,205) 
line(305+offset_x,5,305-offset_x,205)
line(325+offset_x,5,325-offset_x,205)
line(345+offset_x,5,345-offset_x,205) 
line(365+offset_x,5,365-offset_x,205)

line(5-offset_x,5,200-offset_x,5)
line(5-offset_x,25,200-offset_x,25)
line(5-offset_x,45,200-offset_x,45)
line(5-offset_x,65,200-offset_x,65)
  

line(5,405,205+offset_x,205)
line(5+offset_x,385,185,205) 
line(5,365,165+offset_x,205)
line(5+offset_x,345,145,205)
line(5,325,125+offset_x,205)
line(5+offset_x,305,105,205)
line(5,285,85+offset_x,205)
line(5+offset_x,265,65,205)
line(5,245,45+offset_x,205)
line(5+offset_x,225,25,205)
line(5,205,5+offset_x,205)

noFill()
stroke(128,0,128)
arc(300-offset_x,300,180+offset_z,180,0,
    radians(90))
arc(300-offset_x,300,160+offset_z,160,0,
   radians(90))
arc(300-offset_x,300,140+offset_z,140,0,
   radians(90))  
arc(300-offset_x,300,120+offset_z,120,0,
    radians(90))
arc(300-offset_x,300,100+offset_z,100,0,
   radians(90))
arc(300-offset_x,300,80+offset_z,80,0,
   radians(90))
arc(300-offset_x,300,60+offset_z,60,0,
   radians(90))
arc(300-offset_x,300,40+offset_z,40,0,
    radians(90))
  arc(300-offset_x,300,20+offset_z,20,0,
    radians(90))

stroke(128,128,128)
arc(300+offset_x,300,180+offset_x,180,110,
    radians(270))  
arc(300+offset_x,300,160+offset_x,160,110,
   radians(270))
arc(300+offset_x,300,140+offset_x,140,110,
   radians(270))
arc(300+offset_x,300,120+offset_x,120,110,
    radians(270))  
arc(300+offset_x,300,100+offset_x,100,110,
   radians(270))
arc(300+offset_x,300,80+offset_x,80,110,
   radians(270))
arc(300+offset_x,300,60+offset_x,60,110,
   radians(270))
arc(300+offset_x,300,40+offset_x,40,110,
    radians(270))
arc(300+offset_x,300,20+offset_x,20,110,
    radians(270))

fill(random(255),random(255),random(255))
circle(105,305+offset_y,155+size)
fill(255,255,255)
circle(105,305+offset_y,105)
fill(random(255),random(255),random(255))
circle(105,305+offset_y,55+size)
  
stroke(255,0,0)
fill(random(255),random(255),random(255))  
rect(5,5-size2,100,100-size)
rect(105,105+size,100,100+size2)

stroke(255,255,255)
fill(random(255),random(255),random(255))
triangle(255+size,5+offset_y,205,105+offset_y,305+size,105+offset_y)
triangle(405,105+offset_y,355+size,205+offset_y,305+size,105+offset_y)

}

function keyPressed(){
  if(key==="s")
    saveGif('p5js 과제4',10)
}