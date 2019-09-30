<template>
  <div>
    <ClientOnly>
    <ul class="list pl0 pl4-ns pb4 center mw7 tc button-group">
      <li
        v-for="(val, key) in option.getFilterData"
        class="dib mr2 avenir f5 db ph2 pv1 outline-0 no-underline"
        :class="[key===filterOption? 'is-checked white br2 fw6' : 'black-40']"
        @click="filter(key)">{{ key }}
      </li>
    </ul>
  </ClientOnly>
    <ClientOnly>
      <isotope
            ref="quo"
            id="root_isotope2"
            :item-selector="'quote-item'"
            :list="list"
            :options='option'
            @filter="filterOption=arguments[0]"
            @sort="sortOption=arguments[0]"
            @layout="currentLayout=arguments[0]"
            >
            <div v-for="i,index in list"
              :class='[i.themes.join(" ")]'
              :key="index"
              >
              <p class="avenir f5 i lh-copy black-80 mb0 mb0-ns">{{ i.quote }}</p>
              <span class="avenir f5 lh-title db fs-normal mt2 mb4 mb5-ns black-80 fw5">—{{ i.author }}, <a rel="noopener noreferrer" class="avenir f5 link dim fw6 blue" :href="i.url">{{ i.title }}</a></span>
            </div>
    </isotope>
  </ClientOnly>
  </div>
</template>

<script>
import Tachyons from 'tachyons';

export default {
  components: {
    'isotope': () => import('vueisotope')
  },
  name: 'Quotes',
  props: ['quotes'],
  data () {
    return {
      currentLayout:"masonry",
      sortOption: "original-order",
      list: this.quotes,
      selected: null,
      filterOption: "show all",
      option:{
        filter: 'show all',
        getFilterData: {
			    "show all": function(){
			    	return true;
			    },
          networks: function(el){
            return el.themes.includes('networks');
          },
          process: function(el){
            return el.themes.includes('process');
          },
          self: function(el){
            return el.themes.includes('self');
          },
          uncertainty: function(el){
            return el.themes.includes('uncertainty');
          },
          public: function(el) {
            return el.themes.includes('public');
          }
			  },
      }
    }
  },
  methods: {
    filter: function(key) {
    	this.$refs.quo.filter(key);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ---- button ---- */


.li:hover {
  background-color: #8CF;
  text-shadow: 0 1px hsla(0, 0%, 100%, 0.5);
  color: #222;
}

.li:active,
.li.is-checked {
  background-color: #28F;
}

.is-checked {
  background-color: #28F;
}

.li.is-checked {
  color: white;
  text-shadow: 0 -1px hsla(0, 0%, 0%, 0.8);
}

.li:active {
  box-shadow: inset 0 1px 10px hsla(0, 0%, 0%, 0.8);
}

/* ---- isotope ---- */

.grid {
  border: 1px solid #333;
}


/* clear fix */

.grid:after {
  content: '';
  display: block;
  clear: both;
}

.isoDefault {
  min-height: 210px;
}


</style>
