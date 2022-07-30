<template lang="pug">
  a(href="/").anime_poster
    img(src="@/assets/img/1.jpg").anime_poster-img
    h4.anime_poster-title Этот прекрасный мир [1/12]
    span.anime_poster-count Сезон 1
</template>

<script>
export default {
  name: "AnimePoster"
}
</script>

<style scoped lang="scss">
  .anime_poster{
    display: flex!important;
    flex-direction: column;
    align-items: center;
    height: 440px;
    background: #303030;
    color: #fff;
    text-decoration: none;
    position: relative;
    &-img{
      width: 100%;
      object-fit: contain;
    }
    &-title{
      margin-top: 10px;
    }
    &-count{
      position: absolute;
      font-size: 14px;
      top: 0;
      left: 0;
      background: #303030;
      padding: 5px 10px;
    }
  }
</style>