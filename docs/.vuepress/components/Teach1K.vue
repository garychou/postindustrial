<template>
  <div class="w-100 mw9 center pb5">

     <SectionHeader
       :title="$page.frontmatter.sectiontitle"
       :byline="$page.frontmatter.sectionbyline"
       :subtitle="$page.frontmatter.sectionsubtitle"
       :imageurl="$page.frontmatter.heroimage"
       :caption="$page.frontmatter.herocaption"
     >

     <div class="w-100 pv5-ns flex-ns items-end-ns justify-between-ns">
       <div class="avenir lh-copy measure-wide mt4 mt0-ns f5 f4-ns center">
         <Content slot-key="body"/>
       </div>
     </div>
     </SectionHeader>

   </div>
</template>

<script>
import Tachyons from 'tachyons'

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
  methods: {
  }
}
</script>
<style scoped>
</style>
