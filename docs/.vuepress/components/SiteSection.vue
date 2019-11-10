<template>
  <div class="w-100 mw9 center">

     <SectionHeader
       :title="$page.frontmatter.sectiontitle"
       :byline="$page.frontmatter.sectionbyline"
       :subtitle="$page.frontmatter.sectionsubtitle"
       :imageurl="$page.frontmatter.heroimage"
       :caption="$page.frontmatter.herocaption"
     >

     <div class="w-100 pt4-ns flex-ns flex-column-m items-end-ns justify-between-ns">
       <div class="avenir lh-copy measure-wide mt4 mt0-ns pr3-ns f5 f4-ns center">
         <Content slot-key="body"/>
       </div>
       <div class="center w-100 measure-narrow-l f6 bg-black-05 black-70 ph3 ph3-l pv3 mt3-ns br3 avenir">
         <Content slot-key="sidebar"/>
       </div>
     </div>


     </SectionHeader>

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
<style scoped>
</style>
