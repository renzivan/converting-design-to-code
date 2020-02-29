
let asideDisplay = () => {
  if (window.innerWidth <= 1600) {
    $('.aside .custom-card-2').hide()
  } else {
    $('.aside .custom-card-2').show()
  }

  if (window.innerWidth <= 1200) {
    $('nav .hamburger-nav').show()
    $('nav .menu-cont').hide()
  } else {
    $('nav .hamburger-nav').hide()
    $('nav .menu-cont').show()
  }
}

$(document).ready(() => {
    $('nav .hamburger-nav').hide()

    console.log(window.innerWidth)
    asideDisplay()

    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
      asideDisplay()
    })


})