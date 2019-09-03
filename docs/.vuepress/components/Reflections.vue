<template>
  <div class="mt5 w-100">
    <article v-for="sets in reversedlinks" class="dt mb0">
      <div class="dtc w2 w3-ns tr pr4 v-top fw3 f5 f3-l black-40 lh-copy">{{sets[0]}}</div>
      <div class="dtc v-top pl2 pl0-ns tl measure">
        <div v-for="i in sets[1]" :key="i.url">
          <a class="avenir db f5 f5-m f3-ns link dim lh-copy" rel="noopener noreferrer" target="_blank" :href="i.url">{{ i.title }}</a>
          <span class="f6 fw4 mt0 mb4 db lh-copy avenir">{{ i.author }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Tachyons from 'tachyons'

export default {
  name: 'Reflections',
  props: ['links'],
  data () {
    return {}
  },
  components: {
  },
  computed: {
    reversedlinks: function() {
      return Object.entries(this.links).reverse();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
