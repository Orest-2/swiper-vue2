# swiper-vue2

![npm](https://img.shields.io/npm/dt/swiper-vue2)
![npm](https://img.shields.io/npm/v/swiper-vue2)

<h2>
  <a href="https://www.npmjs.com/package/swiper-vue2" target="_blank">Npm</a>
</h2>

<h2>
  <a href="https://swiperjs.com/vue" target="_blank">Doc</a>
</h2>

## Installation
```
npm i swiper-vue2
```

### Usage
`swiper-vue2` exports `SwiperCore` and 2 Vue components: `Swiper`, `SwiperSlide`

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

    <swiper
      :slides-per-view="3"
      :space-between="30"
      loop
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <div>{{ 34+n }}</div>
        <img
          :src="getImageUrl(34+n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        >
      </swiper-slide>
    </swiper>

    <h2>pagination - navigation</h2>
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <div>{{ 34+n }}</div>
        <img
          :src="getImageUrl(34+n)"
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
import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

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

