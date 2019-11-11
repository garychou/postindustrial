<template>
  <div class="w-100 mw9 center">

     <article class="mh0 pa0 ph4-m ph4-l br3">
       <div class="tl tc-ns pv2">
         <h1 class="avenir fw7 lh-title f3 f1-l black-70 tl">{{ $page.frontmatter.sectiontitle }}</h1>
         <time class="f6 ttu db mb3 mb4-ns fw6 tracked black-80 tl">
         {{ $page.frontmatter.sectionbyline }}, <span class="fw5 black-60">{{ $page.frontmatter.sectionsubtitle }}</span>
         </time>
       </div>
       <div class="w-100">
         <img :src="$page.frontmatter.heroimage" class="w-100">
         <span class="db mt2 f7 f6-ns lh-copy ml0 ph2-ns pa0-ns gray tl tc-ns">
           {{ $page.frontmatter.herocaption }}
         </span>
       </div>

       <div class="w-100 pt4-ns flex-ns flex-column-m items-end-ns justify-between-ns">
         <div class="avenir lh-copy measure-wide mt4 mt0-ns pr3-ns f5 f4-ns center">
           <Content slot-key="body" id="body"/>
         </div>
         <div class="center w-100 measure-narrow-l f6 bg-black-05 black-70 ph3 ph3-l pv3 mt3-ns br3 avenir">
           <Content slot-key="sidebar"/>
         </div>
       </div>

     </article>

     <Highlight/>
   </div>
</template>

<script>

export default {
  components: {  },
  props: [''],
  data () {
    return {
    }
  },
  computed: {
  },
  created(){
  },
  mounted(){
  },
  methods: {
  }
}
</script>
