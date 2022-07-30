<template lang="pug">
  .slider
    .slider__header
      h2.slider__header-title Онгоінг
    VueSlickCarousel(v-bind="setting")
      AnimePoster
      AnimePoster
      AnimePoster
      AnimePoster
      AnimePoster
      AnimePoster
      AnimePoster
      AnimePoster
      AnimePoster
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import AnimePoster from "@/components/Anime/AnimePoster";
export default {
  name: "AnimeSlider",
  components: {AnimePoster, VueSlickCarousel },
  data: () => ({
    setting: {
      "infinite": true,
      "speed": 500,
      "slidesToShow": 6,
      "slidesToScroll": 1,

    }
  })
}
</script>

<style lang="scss">
  .slider{
    margin: 30px 0;
    position: relative;
    .slick-slide{
      margin: 0 5px;
    }
    .slick-track{
      display: flex;
    }
    .slick-arrow{
      position: absolute;
      top: -30px;
      width: 70px;
      height: 35px;
      padding: 0;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background-image: url("@/assets/img/arrow-left.png");
      background-size: 40%;
      background-repeat: no-repeat;
      background-position: center;
      &:before{
        display: none;
      }
    }
    .slick-prev{
      right: 80px;
      left: unset;
    }
    .slick-next{
      right: 0;
      background-image: url("@/assets/img/arrow.png");
    }
    &__header{
      &-title{
        color: #fff;
        margin-bottom: 20px;
      }
    }
  }
</style>