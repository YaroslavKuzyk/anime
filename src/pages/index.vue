<template lang="pug">
  div.main-container
    AnimeSlider
    AnimeSlider
    AnimeSlider
</template>

<script>
import AnimeSlider from "@/components/Anime/AnimeSlider";
export default {
  name: 'IndexPage',
  components: {AnimeSlider},
}
</script>
