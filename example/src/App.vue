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
        :key="29+n"
        class="test"
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
      autoplay
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="34+n"
        class="test"
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

    <h2>Movies</h2>
    <swiper
      :slides-per-view="4"
      loop
      autoplay
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="film in movies"
        :key="film.id"
      >
        <div
          class="card"
          :style="{ 'background-image': 'url(' + getImageUrl(film.id) + ')' }"
        >
          <h1>
            {{ film.title }}
          </h1>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// import { SwiperCore, Swiper, SwiperSlide } from '../../src/index.js'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default Vue.extend({
  name: 'App',
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    movies () {
      return [
        {
          id: 34,
          title: 'Film 1'
        },
        {
          id: 35,
          title: 'Film 2'
        },
        {
          id: 36,
          title: 'Film 3'
        },
        {
          id: 37,
          title: 'Film 3'
        }
      ]
    }
  },
  methods: {
    getImageUrl (imageId: any) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    },
    onSwiper (swiper: any) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
})
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
.card {
  width: 400px;
  height: 400px;
  margin: auto;
  h1 {
    color: #fff;
  }
}
</style>
