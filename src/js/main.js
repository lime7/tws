'use strict'

console.log('S>>>')

// Bootstrap alert
// eslint-disable-next-line import/first
// import Alert from 'bootstrap/js/dist/alert'

// Tiny Slider
// eslint-disable-next-line import/first
// import { tns } from 'tiny-slider/src/tiny-slider'

// var slider = tns({
//   container: '.my-slider',
//   items: 3,
//   slideBy: 'page',
//   autoplay: true
// })

// eslint-disable-next-line import/first
import { fslightbox } from 'fslightbox'

// eslint-disable-next-line import/first
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
})

// Get the header
const header = document.getElementById('js-header')

// Get the offset position of the navbar
var sticky = header.getBoundingClientRect().height

scroll.on('scroll', (instance) => {
  if (instance.scroll.y > sticky) {
    header.classList.remove('bg-transparent')
    header.classList.add('bg-blue-900')
  } else {
    header.classList.remove('bg-blue-900')
    header.classList.add('bg-transparent')
  }
})
