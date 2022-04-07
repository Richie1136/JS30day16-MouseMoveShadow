const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 100

function handleMove(event) {
  const { offsetWidth: width, offsetHeight: height } = hero
  let { offsetX: x, offsetY: y } = event

  // this === hero

  // target is the thing that it triggered on

  if (this !== event.target) {
    x = x + event.target.offsetLeft
    y = y + event.target.offsetTop
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(148,0,211,0.7),
      ${xWalk * - 1}px ${yWalk}px 0 rgba(75,0,130,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,0,255,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,255,0,0.7),
      ${xWalk * -2}px ${yWalk}px 0 rgba(255,255,0,0.7),
      ${yWalk}px ${xWalk * -2}px 0 rgba(255, 127,0,0.7),
      ${yWalk * -2}px ${xWalk}px 0 rgba(255,0,0,0.7)
    `;

}

hero.addEventListener('mousemove', handleMove)