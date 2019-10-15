<template>
  <div class="w-100 ma0 pa0">
    <div v-for="sets in reversedlinks">
      <div v-for="j in sets[1]" :key="j.url">
        <div v-if="j.featured === '1'" class="mb3">
<!--
          <a class="avenir f6 dib link dim lh-title" rel="noopener noreferrer" target="_blank" :href="j.url">{{ j.title }} <span class="black-50 fw3 f7"> - {{ j.year }}</span></a>
          <span class="f7 fw4 db avenir lh-copy ">{{ j.author }}</span>
-->
<a class="avenir f6 dib link dim lh-title" rel="noopener noreferrer" target="_blank" :href="j.url">{{ j.title }}</a>
<span class="f7 fw4 db avenir lh-copy ">{{ j.author }}, {{ j.year }}</span>

        </div>
      </div>
  </div>
</div>
</template>
<script>
import Tachyons from 'tachyons';
import resources from '../resources.json';

export default {
  components: {
  },
  name: 'Quotes',
  data () {
    return {
      list: resources.talks,
    }
  },
  computed: {
    reversedlinks: function() {
        return Object.entries(this.list).reverse();
    }
  }
}
</script>

<style scoped>
</style>
