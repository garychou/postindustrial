<template>
  <div>
  <div class="w-100 flex flex-row flex-wrap bg-black-05">
    <div v-for="sets in buildRoster"  class="flex flex-row flex-wrap pv3">
      <div class="w-auto-ns mr0 mb1 db black f4 b ph2 tc lh-title">{{ sets[0] }}</div>
      <div v-for="p in sets[1]"  class="avenir mh1 mb1 w-auto w-auto-ns lh-title tc db items-center flex">
        <a
          class="db pa1 ph1 link bg-animate roster mid-gray hover-near-black hover-bg-white br0"
          v-bind:class=p.role
          :href="p.twitter"
          v-bind:title="p.role + ', ' + p.program + ' ' + p.year"
          >
          {{ p.name }}
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Tachyons from 'tachyons'

export default {
  name: 'Reflections',
  props: ['roster'],
  data () {
    return {}
  },
  components: {
  },
  computed: {
    buildRoster: function() {
      return Object.entries(this.roster).reverse();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
