let homeBtn = document.getElementById('homeBtn')
let newsBtn = document.getElementById('newsBtn')
let demoBtn = document.getElementById('demoBtn')
let contactBtn = document.getElementById('contactBtn')

let home = document.getElementById('home')
let news = document.getElementById('news')
let demo = document.getElementById('demo')
let contact = document.getElementById('contact')

let homeTop = home.offsetTop - 80
let newsTop = news.offsetTop - 80
let demoTop = demo.offsetTop - 80
let contactTop = contact.offsetTop - 80

const scroll2where = (number = 0, time) => {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number
    return number
  }
  let spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime // 计算循环的次数
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
  let everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
  let scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--
      scroll2where((nowTop += everTop))
    } else {
      clearInterval(scrollTimer) // 清除计时器
    }
  }, spacingTime)
}

homeBtn.addEventListener('click', () => {
  scroll2where(homeTop, 400)
})
newsBtn.addEventListener('click', () => {
  scroll2where(newsTop, 400)
})
demoBtn.addEventListener('click', () => {
  scroll2where(demoTop, 400)
})
contactBtn.addEventListener('click', () => {
  scroll2where(contactTop, 400)
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset < newsTop - 1) {
    homeBtn.classList.add('hover')
    newsBtn.classList.remove('hover')
    demoBtn.classList.remove('hover')
    contactBtn.classList.remove('hover')
  } else if (window.pageYOffset < demoTop - 1) {
    homeBtn.classList.remove('hover')
    newsBtn.classList.add('hover')
    demoBtn.classList.remove('hover')
    contactBtn.classList.remove('hover')
  } else if (
    window.pageYOffset + screen.height <
    document.documentElement.scrollHeight
  ) {
    homeBtn.classList.remove('hover')
    newsBtn.classList.remove('hover')
    demoBtn.classList.add('hover')
    contactBtn.classList.remove('hover')
  } else {
    homeBtn.classList.remove('hover')
    newsBtn.classList.remove('hover')
    demoBtn.classList.remove('hover')
    contactBtn.classList.add('hover')
  }
  if (navBtn.classList.contains('display')) {
    navBtn.classList.remove('display')
    document.getElementsByClassName('nav')[0].classList.remove('display')
  }
})

let navBtn = document.getElementById('nav-bur')
navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('display')
  document.getElementsByClassName('nav')[0].classList.toggle('display')
})
