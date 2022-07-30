<template lang="pug">
  div
    div(@click="closeHeader" :class="{'blur-is-visible' : headerMenuIsHide}").blur
    div(:class="{'header-menu-is-hide' : headerMenuIsHide}").header-menu
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "HeaderMenu",
  computed:{
    ...mapState('Header', ['headerMenuIsHide'])
  },
  methods: {
    ...mapMutations('Header', ['SET_HEADER_MENU']),
    closeHeader(){
      this.SET_HEADER_MENU(true)
    }
  }
}
</script>

<style scoped>
.blur{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.3;
  display: block;
  z-index: 10;
}
  .header-menu{
    position: absolute;
    left: 0;
    width: 300px;
    height: 100%;
    top: 57px;
    background: #303030;
    border-top: 1px solid #ffffff;
    transition: .5s;
    z-index: 11;
  }
  .header-menu-is-hide{
    left: -300px;
  }
  .blur-is-visible{
    display: none;
  }
</style>
