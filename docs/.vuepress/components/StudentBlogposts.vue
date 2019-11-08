<template>
  <div class="w-100 mt3">
    <div v-for="j in quotesByYear('2018')">
      <div class="mb4">
        <a class="avenir f5 dib link dim lh-title" rel="noopener noreferrer" target="_blank" :href="j.url">{{ j.title }}</a>
        <span class="f6 fw4 db avenir lh-copy ">{{ j.author }}, {{ j.year }}</span>
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
      list: resources.quotes,
    }
  },
  methods: {
    quotesByYear: function(y) {
      console.log(y);

      var results =  this.list.filter(obj => {
          return obj.year === y
        });
      console.log(results);
      return results;
    }
  }
}
</script>

<style scoped>
</style>
