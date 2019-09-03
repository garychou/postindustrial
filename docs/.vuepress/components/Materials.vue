<template>
  <div class="w-100 pv2">
      <article v-for="sets in reversedlinks" class="dt">
        <div class="dtc w2 w3-ns tr pr4 v-top fw3 f5 f3-l black-40 lh-copy">{{sets[0]}}</div>
        <div class="dtc v-top pl2 pl0-ns tl measure">
          <div v-for="i in sets[1]" :key="i.syllabus" class="mb3">
            <a class="avenir db f5 f5-m f3-ns link dim lh-copy"  target="_blank" :href="i.syllabus">{{ i.program }}</a>
          </div>
        </div>
      </article>
  </div>
</template>

<script>
import Tachyons from 'tachyons'

export default {
  name: 'Materials',
  props: ['links'],
  data () {
    return {}
  },
  components: {
  },
  computed: {
    reversedlinks: function() {
//      return Object.values(this.links).reverse();
        return Object.entries(this.links).reverse();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
