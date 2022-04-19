const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const circles = document.querySelectorAll('.circle')
const step = document.querySelector('.step')
let activated = 1;

nextBtn.addEventListener('click', () => {
  console.log(activated)
  if (activated >= circles.length) return
  let w = 100/(circles.length - 1) * activated
  activated++;
  for (let i = 0; i<activated; i++){
    circles[i].classList.add('active')
  }
  if (activated > 1) {
    prevBtn.disabled = false;
  }
  step.style.width = w + '%';
})

prevBtn.addEventListener('click', () => {
  if (activated <= 1) return
  activated--
  for (let i = activated; i<circles.length; i++) {
    circles[i].classList.remove('active')
  }
  if (activated === 1) {
    prevBtn.disabled = true;
  }
  let w = 100/(circles.length - 1) * (activated - 1)
  step.style.width = w + '%';
})