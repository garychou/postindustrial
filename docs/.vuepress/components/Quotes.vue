<template>
  <div>
    <ul class="list pl0 pl4-ns pb4 center mw7 tc button-group">
      <li
        v-for="(val, key) in option.getFilterData"
        class="dib mr2 avenir f5 db ph2 pv1 black-40 outline-0 no-underline"
        :class="[key===filterOption? 'is-checked' : '']"
        @click="filter(key)">{{ key }}
      </li>
    </ul>

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
        class="mv0">
        <p class="avenir f5 i lh-copy black-80 mb0 mb0-ns">{{ i.quote }}</p>
        <span class="avenir f5 lh-title db fs-normal mt2 mb4 mb5-ns black-80 fw5">—{{ i.author }},
          <a rel="noopener noreferrer" class="avenir f5 link dim fw6 blue" :href="i.url">{{ i.title }}</a>
        </span>
      </div>

      </isotope>
  </div>

</div>
</template>

<script>
import Tachyons from 'tachyons'
import isotope from 'vueisotope'
export default {
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
            return !!el.networks;
          },
          process: function(el){
            return !!el.process;
          },
          self: function(el){
            return !!el.self;
          },
          uncertainty: function(el){
            return !!el.uncertainty;
          },
          public: function(el) {
            return !!el.public;
          }
			  },
      }
    }
  },
  components: {
      isotope
  },
  methods: {
    filter: function(key) {
    	this.$refs.quo.filter(key);
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  background-color: #eee;
  padding: 10px;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-family: monospace;
  color: #333;
}

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}


/* ---- button ---- */

.li {
  display: inline-block;
  padding: 0.5em 1.0em;
  background: #EEE;
  border: none;
  border-radius: 7px;
  background-image: linear-gradient( to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.2));
  color: #222;
  font-family: sans-serif;
  font-size: 16px;
  text-shadow: 0 1px white;
  cursor: pointer;
}

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


/* ---- button-group ---- */

.button-group {
  margin-bottom: 20px;
}

.button-group:after {
  content: '';
  display: block;
  clear: both;
}

.button-group .button {
  float: left;
  border-radius: 0;
  margin-left: 0;
  margin-right: 1px;
}

.button-group .button:first-child {
  border-radius: 0.5em 0 0 0.5em;
}

.button-group .button:last-child {
  border-radius: 0 0.5em 0.5em 0;
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
