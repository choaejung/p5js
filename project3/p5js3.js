function setup() {
  createCanvas(600,400);
  
  // 머리카락
  fill(64,32,32);
  noStroke();
  ellipse(300,200,250,310);
  ellipse(300,300,250,200);
  ellipse(300,360,250,200);
  ellipse(300,410,250,200);

  // 얼굴
  fill(255,229,204);
  noStroke();
  ellipse(300,210,220,240);
  ellipse(185,200,33,40);
  ellipse(415,200,33,40);

  // 귀걸이
  fill(229,255,255);
  noStroke();
  circle(182,210,10);
  circle(418,210,10);

  // 눈썹
  stroke(0);
  strokeWeight(4);
  line(240,180,270,180);
  line(330,180,360,180);

  // 눈
  stroke(0);
  noFill();
  arc(255,205,30,18,PI,0);
  arc(345,205,30,18,PI,0);

  fill(255);
  strokeWeight(2);
  ellipse(255,205,30,15);
  ellipse(345,205,30,15);

  fill(0);
  noStroke();
  circle(255,203,18);
  circle(345,203,18);

  fill(255);
  circle(252,202,7);
  circle(342,202,7);

  // 볼터치
  fill(255,204,204);
  noStroke();
  ellipse(230,240,50,30);
  ellipse(370,240,50,30);

  // 코
  fill(255,204,153);
  noStroke();
  triangle(293,222, 307,222, 300,238);

  // 입
  noFill();
  stroke(255,100,100);
  strokeWeight(3);
  arc(300,266,50,20,0,PI);

  // 앞머리 왼쪽
  push();
  fill(64,32,32);
  noStroke();
  translate(270,140);
  rotate(radians(-20));
  arc(0,0,180,100,PI,0,CHORD); 
  pop();

  // 앞머리 오른쪽
  push();
  fill(64,32,32);
  noStroke();
  translate(330,140);
  rotate(radians(20));
  arc(0,0,180,100,PI,0,CHORD); 
  pop();

  // 목
  fill(255,229,204);
  noStroke();
  rect(280,320,40,60,10);

  // 어깨
  fill(229,229,255);
  noStroke();
  ellipse(300,410,280,100);

  // 목걸이
  noFill();
  stroke(255,255,204);
  strokeWeight(5);
  arc(300,350,38,40,0,PI); 
}