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

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 purple`

}

hero.addEventListener('mousemove', handleMove)