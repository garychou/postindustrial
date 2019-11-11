<template>
     <div class="w-100 db dt-ns">

           <div v-for="sets in reversedlinks">

             <div v-if="sets[0] == year" class="mb3-ns super-light-gray br3 pv0 pv2-ns">

             <div class="db dtc-ns ph2 ph3-ns pt0 pb3-ns w-100 w-40-ns v-top">

               <h3 class="avenir pv2 mv3 db f1 f-subheadline-ns black-60 fw6">{{sets[0]}}</h3>

               <div class="bg-white-10">

                 <div class="db ml1 pb0 pb3-ns pr4">
                   <span v-if="talks[sets[0]]" class="flex bb b--near-white f7 fw6 ttu db mv3 mt4-ns black-40">REFLECTIONS</span>
                   <div v-for="j in talks[sets[0]]" :key="j.url" class="mb3">
                     <a class="avenir f4 link dim lh-title" rel="noopener noreferrer" target="_blank" :href="j.url">{{ j.title }}</a>
                     <span class="f6 fw4 db avenir mt1 lh-copy ">{{ j.author }}</span>
                   </div>
                 </div>

                 <div class="db ml1 pb0 pb3-ns">

                   <span class="flex bb b--near-white f7 fw6 ttu db mt4 mb3 black-40">Syllabi</span>
                   <div v-for="i in sets[1]" :key="i.syllabus" class="db mb1 f4 avenir lh-copy  ">

                     <a class="dim link"  target="_blank" :href="i.syllabus">
                       {{ i.program }}
                     </a>
                     <span class="black-40"> — {{ i.source }}</span>

                   </div>
                 </div>

                   <span class="flex bb b--near-white f7 fw6 ttu db mt4 mb3 ml1 black-40">Thanks</span>
                   <div class="flex flex-row flex-wrap items-center mt2 mb4">
                   <div v-for="p in thanks[sets[0]]"  class="mb2 flex">
                       <a
                     class="avenir fw5 ph1 link gray hover-near-black hover-bg-white br0 f6"
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
           <div class="db dtc-ns pb4 pv3-ns w-100 w-60-ns v-mid">

             <div class="flex flex-column justify-between w-100">


               <div v-for="q in quotesByYear(sets[0])" :key="q.quote" class="mb2 mb4-ns ph2 pb2 pr4-ns measure-wide center db">
                 <p class="avenir f5 f3-ns lh-title black-70 ml2 mb3">"{{ q.quote }}"</p>
                 <span class="tr avenir f5 lh-title db fs-normal black-60 fw5 ml2">{{ q.author }}, <a rel="noopener noreferrer" class="avenir f5 link dim" :href="q.url">{{ q.title }}</a></span>
               </div>
             </div>
           </div>
         </div>
       </div>
       </div>
</template>

<script>
import resources from '../resources.json'

export default {
  components: { },
  props: ['year'],
  data () {
    return {
      quotes: resources.quotes,
      syllabi: resources.syllabi,
      talks: resources.talks,
      thanks: resources.thanks
    }
  },
  computed: {
    reversedlinks: function() {
        return Object.entries(this.syllabi).reverse();
    }
  },
  created(){
      for (var year in this.thanks) {
        this.thanks[year].sort((a, b) => (a.name > b.name) ? 1 : -1)
      }
  },
  methods: {
    quotesByYear: function(y) {
      console.log(y);

      var results =  this.quotes.filter(obj => {
          return obj.year === y
        });
      console.log(results);
      return results;
    }
  }

}
</script>

<style lang="stylus">

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>

<style scoped>

th,td {
  border: 0;
}
tr {
  border: 0;
  background-color: #fff;
  border-radius: 3px;
}
</style>
