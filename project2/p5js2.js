let x = 300;
let y = 250;
let mouth = 1; // 입 모양 상태 (1: 웃는 입, 2: 둥근 입, 3: 일자 입)
let brow = 1;  // 눈썹 모양 상태 (1: 일자 눈썹, 2: 각진 눈썹)

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240); // 배경색

  // --- 머리카락 ---
  fill(64, 32, 32); // 짙은 갈색
  noStroke();
  ellipse(300, 200, 250, 310);
  ellipse(300, 300, 250, 200);
  ellipse(300, 360, 250, 200);
  ellipse(300, 410, 250, 200);

  // --- 얼굴 ---
  fill(255, 229, 204); // 살색
  noStroke();
  ellipse(300, 210, 220, 240); // 얼굴 윤곽
  ellipse(185, 200, 33, 40);    // 왼쪽 귀
  ellipse(415, 200, 33, 40);    // 오른쪽 귀

  // --- 귀걸이 ---
  fill(229, 255, 255); // 밝은 청록색
  noStroke();
  circle(182, 210, 10);
  circle(418, 210, 10);

  // --- 눈썹 모양 (인터랙션: 마우스 클릭) ---
  stroke(0);
  strokeWeight(4);
  if (brow === 1) { // 일자 눈썹
    line(240, 180, 270, 180);
    line(330, 180, 360, 180);
  } else if (brow === 2) { // 각진 눈썹 (불만 또는 놀람)
    line(240, 190, 270, 175);
    line(330, 175, 360, 190);
  }

  // --- 눈 ---
  // 눈 윤곽 (아크)
  stroke(0);
  noFill();
  arc(255, 205, 30, 18, PI, 0);
  arc(345, 205, 30, 18, PI, 0);

  // 눈 흰자위
  fill(255);
  strokeWeight(2);
  ellipse(255, 205, 30, 15);
  ellipse(345, 205, 30, 15);

  // 눈동자 (검은색)
  fill(0);
  noStroke();
  circle(255, 203, 18);
  circle(345, 203, 18);

  // 눈동자 하이라이트 (흰색)
  fill(255);
  circle(252, 202, 7);
  circle(342, 202, 7);

  // --- 볼터치 ---
  fill(255, 204, 204); // 연한 분홍색
  noStroke();
  ellipse(230, 240, 50, 30);
  ellipse(370, 240, 50, 30);

  // --- 코 ---
  fill(255, 204, 153); // 코 색깔
  noStroke();
  triangle(293, 222, 307, 222, 300, 238);

  // --- 앞머리 ---
  fill(64, 32, 32); // 머리카락 색깔
  noStroke();
  arc(300, 160, 180, 150, PI, 0, CHORD);

  // --- 목 및 어깨 ---
  // 목
  fill(255, 229, 204); // 살색
  noStroke();
  rect(280, 320, 40, 60, 10);

  // 어깨
  fill(229, 229, 255); // 옷 색깔 (연한 파랑)
  noStroke();
  ellipse(300, 410, 280, 100);

  // 팔 (현재 팔 코드는 아무것도 그리지 않음)
  // fill(229, 229, 255);
  // noStroke();

  // --- 목걸이 ---
  noFill();
  stroke(255, 255, 204); // 연한 노랑 (금색 느낌)
  strokeWeight(5);
  arc(300, 350, 38, 40, 0, PI);

  // --- 입 모양 (인터랙션: 키보드 입력) ---
  noFill();
  stroke(255, 100, 100); // 입술 색깔
  strokeWeight(3);
  if (mouth === 1) { // 웃는 입
    arc(300, 266, 50, 20, 0, PI);
  } else if (mouth === 2) { // 둥근 입
    fill(255, 100, 100);
    ellipse(300, 266, 20, 30);
  } else if (mouth === 3) { // 일자 입
    line(280, 266, 320, 266);
  }
}

// --- 이벤트 함수 ---

// 입 모양 상태 변경 (키보드 1, 2, 3)
function keyPressed() {
  if (key === "1") {
    mouth = 1;
  } else if (key === "2") {
    mouth = 2;
  } else if (key === "3") {
    mouth = 3;
  } else if (key === "s") {
    // 's' 키를 누르면 gif 저장 (p5.js-gif 라이브러리가 필요함)
    saveGif('p5js 과제3', 10);
  }
}

// 눈썹 모양 상태 변경 (마우스 클릭)
function mousePressed() {
  if (brow === 1) {
    brow = 2;
  } else {
    brow = 1;
  }
}