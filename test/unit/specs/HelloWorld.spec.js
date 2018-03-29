import Vue from 'vue'
import Home from '@/components/Home'
import Gallery from '@/components/Gallery'
import Ipad from '@/components/Ipad'
import Iphone from '@/components/Iphone'
import Beautiful from '@/components/Beautiful'
import Platform from '@/components/Platform'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
  })
})

describe('Gallery.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Gallery)
    const vm = new Constructor().$mount()
  })
})

describe('Ipad.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Ipad)
    const vm = new Constructor().$mount()
  })
})

describe('Iphone.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Iphone)
    const vm = new Constructor().$mount()
  })
})

describe('Beautiful.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Beautiful)
    const vm = new Constructor().$mount()
  })
})

describe('Platform.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Platform)
    const vm = new Constructor().$mount()
  })
})

describe('Features.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Features)
    const vm = new Constructor().$mount()
  })
})

describe('Footer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
  })
})
