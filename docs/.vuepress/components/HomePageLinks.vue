<template>
  <div class="w-100 mt3">
    <div v-for="sets in reversedlinks">
      <div v-for="j in sets[1]" :key="j.url">
        <div v-if="j.featured === '1'" class="mb4">
          <a class="avenir f5 dib link dim lh-title" rel="noopener noreferrer" target="_blank" :href="j.url">{{ j.title }}</a>
          <span class="f6 fw4 db avenir lh-copy ">{{ j.author }}, {{ j.year }}</span>
        </div>
      </div>
  </div>
</div>
</template>
<script>
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
