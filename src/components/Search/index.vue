<template lang="pug">
  v-text-field(:rules="rules" placeholder="Search" hide-details).search.py-0.my-0
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data: () => ({
    rules: [],
  }),
}
</script>

<style lang="scss">
.search {
  margin: 0!important;
  .v-input__slot:before, .v-input__slot:after{
    display: none;
  }
  .v-text-field__slot input{
    background: rgba(69, 69, 69, 100%);
    padding: 10px;
    border-radius: 3px;
    color: #ffffff;
    &::placeholder{
      color: #ffffff;
      opacity: 0.3;
    }
  }
}
</style>
