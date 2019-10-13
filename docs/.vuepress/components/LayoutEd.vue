<template>
  <Layout>
   <template slot="page-top">
     <!-- Page content… -->

     <div class="w-100 mw9 center pv5 ph3">

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
         <div class="f6 measure-narrow-ns bg-black-05 black-70 ph3 ph4-l pv3 mt3-ns mh0 mh2-m mh4-ns br3 avenir">
           <Content slot-key="sidebar"/>
         </div>
       </div>

       </SectionHeader>

       <BasicPanel
         name="Insights"
         bgclass="bg-washed-blue"
         txtcolor="black-80"
         titlecolor="black-60">
         <Content slot-key="insights"/>
       </BasicPanel>

       <CourseArchive />

     </div>

    </template>
  </Layout>
</template>

<script>
import Tachyons from 'tachyons'
import Layout from "@theme/layouts/Layout.vue";

export default {
  components: { Layout },
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

<style lang="stylus">
</style>

<style scoped>
.page {
  padding-bottom: 2rem;
  display: block;
}
.super-light-gray {
  background: #f9f9fb;
}

th,td {
  border: 0;
}
tr {
  border: 0;
  background-color: #fff;
  border-radius: 3px;
}
</style>
