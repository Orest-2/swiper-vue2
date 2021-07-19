# swiper-vue2

<a href="https://swiperjs.com/vue" target="_blank">Doc</a>

## Installation
```
npm i swiper-vue2
```

### Usage
`swiper-vue2` exports 2 components: `Swiper` and `SwiperSlide`:

```vue
<template>
  <div>
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <div>{{ 29+n }}</div>
        <img
          :src="getImageUrl(29+n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper.scss'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getImageUrl (imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
}
</script>

<style lang="scss" scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}
</style>
```

