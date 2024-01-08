function sketch(s) {
  const GAME = {
    width: window.innerWidth, 
    height: window.innerHeight
    
  };

  GAME.halfWidth = GAME.width / 2;
  GAME.halfHeight = GAME.height / 2;
  let canvas;

  const star = {
    x: GAME.halfWidth,
    y: GAME.halfHeight,
    width: 20,
    height: 20,
    speed: 9,
    direction: 45,
  };
  
  const stars = []

  s.setup = () => {
    canvas = s.createCanvas(GAME.width, GAME.height);

    for (let i = 0; i < 50; i++) {
        s.strokeWeight(0);
        const x = s.random(GAME.width)
        const y = s.random(GAME.height)
        let d = s.random(4)
        console.log(d)

        s.circle(x, y, d)

        stars.push({ x, y, d });
    }
  };

  s.draw = () => {
    s.clear()

    for (const star of stars) {
        s.noStroke();
        s.circle(star.x, star.y, star.d)
        star.y -= star.d / 10

        if (star.y < -10) star.y = GAME.height + 3
    }
  };

  function showClickToStart() {
    s.textSize(20);
    s.fill("white");
    s.textAlign("center");
    s.text("Click para começar", GAME.halfWidth, GAME.halfHeight);
  }

  function moveBall() {
    ball.x += ball.speed * s.cos(s.radians(ball.direction));
    ball.y -= ball.speed * s.sin(s.radians(ball.direction));
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  new p5((s) => sketch(s));
});
