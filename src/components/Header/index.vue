<template lang="pug">
  header.header
    div.header__nav
      button(@click="openHeader").burger
        span
        span
        span
      h3.header__title Anime.tv
      v-breadcrumbs(:items="breadcrumbs" divider="|" )
    Search.header__search
    div
      a(href="/").header__sign Sign In
      a(href="/").header__sign Create Account
</template>

<script>
import Search from "@/components/Search";
import {mapMutations, mapState} from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {Search},
  data: () => ({
    breadcrumbs: [
      {
        text: 'Home',
        disabled: true
      },
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_link_2',
      },
    ]
  }),
  computed:{
    ...mapState('Header', ['headerMenuIsHide'])
  },
  methods: {
    ...mapMutations('Header', ['SET_HEADER_MENU']),
    openHeader(){
      this.SET_HEADER_MENU(this.headerMenuIsHide = !this.headerMenuIsHide)
    }
  }
}
</script>

<style lang="scss">
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(48, 48, 48, 100%);
    padding: 0 20px;
    position: relative;
    &__nav{
      display: flex;
      align-items: center;
    }
    &__search{
      width: 420px;
      position: absolute;
      left: calc(50% - 210px);
      top: calc(50% - 17px);
      margin: 0;
    }
    &__title{
      font-family: 'itim-regular', sans-serif;
      color: #fff;
      position: relative;
      margin-right: 24px;
      font-size: 24px;
      line-height: 24px;
      font-weight: 400;
      &:before{
        content: '';
        position: absolute;
        width: 1px;
        height: 20px;
        right: -24px;
        top: 4px;
        background: #ffffff;
        opacity: 0.2;
      }
    }
    &__sign{
      color: #ffffff!important;
      text-decoration: none;
      text-transform: uppercase;
      &:last-child{
        margin-left: 50px;
      }
    }
  }
  .burger{
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    position: relative;
    &:before{
      position: absolute;
      content: '';
      width: 40px;
      height: 40px;
      background: #ffffff;
      opacity: 0;
      left: calc(50% - 20px);
      top: calc(50% - 20px);
      border-radius: 50%;
      transition: 0.4s;
    }
    &:hover{
      &:before{
        opacity: 0.2;
      }
    }
    span{
      width: 25px;
      height: 3px;
      background: #fff;
      margin: 2px 0;
    }
  }
  .v-breadcrumbs__item {
    color: #ffffff!important;
    &--disabled{
      opacity: 0.5;
    }
  }
</style>
