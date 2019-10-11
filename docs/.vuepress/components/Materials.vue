<template>
  <div class="w-100 mw9 center">

      <article class="mh0 pa3 pa4-m ph4-l pb4 br3 mb2">

        <div class="tl tc-ns pb4">
        <h1 class="avenir fw7 measure lh-title f3 f1-ns black-70 tl">"What enables artists, entrepreneurs, and activists to be successful in today’s networked world?"</h1>
        <time class="f6 ttu db mb3 mb4-ns fw6 tracked black-80 tl">
          Christina Xu & Gary Chou, <span class="fw4 black-50">Fall 2018</span>
        </time>
        </div>

        <div class="w-100">
          <img src="/class.png" class="w-100">
          <span class="db mt2 f7 f6-ns lh-copy ml0 ph2-ns pa0-ns gray tl tc-ns">
            Students from School of Visual Arts MFA in Interaction Design go through an ideation exercise at the beginning of the semester.
          </span>
        </div>

        <div class="w-100 pv5-ns flex-ns items-end-ns justify-between-ns">
          <div class="avenir lh-copy measure-wide mt4 mt0-ns f5 f4-ns center">
            <Content slot-key="overview"/>
          </div>
          <div class="f6 measure-narrow bg-white-80 black-70 ph4 pv3 mt3-ns mr4-ns br3 avenir">
            <h1 class="f6">Acknowledgments</h1>
            <Content slot-key="acknowledgments"/>
          </div>

<!--
Each run of the course is a set of sprawling explorations into many unfamiliar areas. To manage the unexpected obstacles and opportunities along the way, we've relied heavily on the friends and colleagues in our collective network for guidance and advice.

Over the years, [we've](https://entrepreneurdesigners.tumblr.com/post/157837083514/on-saturday-we-held-the-product-sessions-event-at) [experimented](https://entrepreneurdesigners.tumblr.com/post/140179672814/we-just-completed-week-7-of-entrepreneurial) [with](https://twitter.com/xuhulk/status/702506730324889600) [different](https://entrepreneurdesigners.tumblr.com/post/77699845494/were-just-about-at-the-halfway-point-in-the) [ways](https://entrepreneurdesigners.tumblr.com/post/112528863059/entrepreneurial-design-project-2-with-the-1000) to utilize our network: as advisors, teaching assistants, guest commenters [and](https://entrepreneurdesigners.tumblr.com/post/75387298387/today-rachel-and-sha-visited-the-class-to-share) [speakers](http://minseungsong.tumblr.com/post/21912824737).
-->
        </div>
        </article>

      <article class="cf ph3 ph5-ns pv4 pv5-ns bg-white br3 mb3">
        <header class="fn fl-ns w-40-ns pr4-ns">
          <span class="avenir pv3 db f1 f-subheadline-ns black-30 fw6">Insights</span>

        </header>
        <div class="avenir fn fl-ns w-100-m w-60-ns lh-copy measure-wide mt4 mt0-ns f5 f4-ns">
          <Content slot-key="insights"/>
        </div>
      </article>



      <div class="w-100 db dt-ns">

          <div v-for="sets in reversedlinks" class="mb2 bg-white-60 br3 pv1 pv5-ns">

            <div class="db dtc-ns ph3 ph5-ns pt0 pb3 w-100 w-40-ns v-top">
<!--
              <div class="flex items-center justify-center bg-black-10 pv4">
                <span class="mb2 db f1 white fw6">{{sets[0]}}</span>
              </div>
-->
              <span class="avenir pv3 pv4-ns db f1 f-subheadline-ns black-30 fw6">{{sets[0]}}</span>

              <div class="bg-white-10">

                <div class="db ml1 pb0 pb3-ns pr4">
                  <span v-if="talks[sets[0]]" class="flex bb b--near-white f7 fw6 ttu db mv3 mt4-ns mid-gray">REFLECTIONS</span>
                  <div v-for="j in talks[sets[0]]" :key="j.url" class="mb3">
                    <a class="avenir f5 link dim lh-title" rel="noopener noreferrer" target="_blank" :href="j.url">{{ j.title }}</a>
                    <span class="f7 fw4 db avenir mt1 lh-copy ">{{ j.author }}</span>
                  </div>
                </div>

                <div class="db ml1 pb0 pb3-ns">

                  <span class="flex bb b--near-white f7 fw6 ttu db mt4 mb3 mid-gray">Syllabi</span>
                  <div v-for="i in sets[1]" :key="i.syllabus" class="db mb1 f5 avenir">

                    <a class="dim link"  target="_blank" :href="i.syllabus">
                      {{ i.program }}
                    </a>
                    <span class="black-40"> — {{ i.source }}</span>

                  </div>
                </div>

                  <span class="flex bb b--near-white f7 fw6 ttu db mt4 mb3 ml1 mid-gray">Thanks</span>
                  <div class="flex flex-row flex-wrap items-center mt2 mb4">
                  <div v-for="p in sortThanks(thanks[sets[0]])"  class="mb1 flex">
                      <a
                    class="avenir fw5 ph1 link gray hover-near-black hover-bg-white br0 f7"
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
            <div class="db dtc-ns pb4 pv3-ns w-100 w-60-ns v-top">
              <div class="flex flex-row flex-wrap w-100">
                <div v-for="q in quotesByYear(sets[0])" :key="q.quote" class="mb2 mb3-ns ph2 pb2 pr4-ns measure-wide center db">
                  <p class="avenir f5 f3-ns lh-title black-70 ml2 mb2">"{{ q.quote }}"</p>
                  <span class="avenir f6 lh-title db fs-normal black-60 fw5 ml2">—{{ q.author }}, <a rel="noopener noreferrer" class="avenir f6 link dim" :href="q.url">{{ q.title }}</a></span>
                </div>
              </div>
            </div>

          </div>

      </div>

      <div>
      </div>
  </div>
</template>

<script>
import Tachyons from 'tachyons'
import resources from '../resources.json'

export default {
  name: 'Materials',
  props: [],
  data () {
    return {
      quotes: resources.quotes,
      syllabi: resources.syllabi,
      talks: resources.talks,
      thanks: resources.thanks
    }
  },
  components: {
  },
  computed: {
    reversedlinks: function() {
        return Object.entries(this.syllabi).reverse();
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
    },
    sortThanks: function(r) {
      r.sort((a, b) => (a.name > b.name) ? 1 : -1)
      return r;
    }
  }
}
</script>
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
