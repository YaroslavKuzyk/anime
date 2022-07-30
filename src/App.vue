<template lang="pug">
  v-app
    v-main
      v-container(fluid).px-0.py-0
        Header
        HeaderMenu
        router-view
</template>

<script>

import Header from "@/components/Header";
import HeaderMenu from "@/components/Header/HeaderMenu";
export default {
  name: 'App',
  components: {HeaderMenu, Header},
  data: () => ({
  }),
};
</script>
<style lang="scss" src="./assets/styles/main.scss"></style>
