import Vue from 'vue'

import { uniqueClasses } from './utils'

const SwiperSlide = Vue.extend({
  name: 'SwiperSlide',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    swiperRef: {
      type: Object,
      default: () => null
    },
    zoom: {
      type: Boolean,
      default: undefined
    },
    virtualIndex: {
      type: [String, Number],
      default: undefined
    }
  },

  data () {
    return {
      eventAttached: false,
      slideClasses: 'swiper-slide'
    }
  },

  computed: {
    slideElRef () {
      return this.$refs?.slide?.el
    },

    slideData () {
      return {
        isActive:
          this.slideClasses.indexOf('swiper-slide-active') >= 0 ||
          this.slideClasses.indexOf('swiper-slide-duplicate-active') >= 0,
        isVisible: this.slideClasses.indexOf('swiper-slide-visible') >= 0,
        isDuplicate: this.slideClasses.indexOf('swiper-slide-duplicate') >= 0,
        isPrev:
          this.slideClasses.indexOf('swiper-slide-prev') >= 0 ||
          this.slideClasses.indexOf('swiper-slide-duplicate-prev') >= 0,
        isNext:
          this.slideClasses.indexOf('swiper-slide-next') >= 0 ||
          this.slideClasses.indexOf('swiper-slide-duplicate-next') >= 0
      }
    }
  },

  mounted () {
    if (!this.swiperRef) return

    this.swiperRef.on('_slideClass', this.updateClasses)

    this.eventAttached = true
  },

  beforeUpdate () {
    if (this.eventAttached || !this.swiperRef) return

    this.swiperRef.on('_slideClass', this.updateClasses)

    this.eventAttached = true
  },

  updated () {
    if (!this.slideElRef || !this.swiperRef) return
    if (this.swiperRef.destroyed) {
      if (this.slideClasses !== 'swiper-slide') {
        this.slideClasses = 'swiper-slide'
      }
    }
  },

  beforeDestroy () {
    if (!this.swiperRef) return

    this.swiperRef.off('_slideClass', this.updateClasses)
  },

  methods: {
    updateClasses (swiper, el, classNames) {
      if (el === this.slideElRef) {
        this.slideClasses = classNames
      }
    }
  },

  render (h) {
    const self = this

    const scopedSlots = this.$scopedSlots

    return h(
      self.tag,
      {
        class: uniqueClasses(`${self.slideClasses}`),
        ref: 'slide',
        'data-swiper-slide-index': self.virtualIndex
      },
      self.zoom
        ? h(
          'div',
          {
            class: 'swiper-zoom-container',
            'data-swiper-zoom': typeof self.zoom === 'number' ? self.zoom : undefined
          },
          scopedSlots.default && scopedSlots.default(self.slideData)
        )
        : scopedSlots.default && scopedSlots.default(self.slideData)
    )
  }
})

export { SwiperSlide }
