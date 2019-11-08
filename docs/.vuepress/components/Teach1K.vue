<template>
  <div class="w-100 mw9 center pb5">

     <SectionHeader
       :title="$page.frontmatter.sectiontitle"
       :byline="$page.frontmatter.sectionbyline"
       :subtitle="$page.frontmatter.sectionsubtitle"
       :imageurl="$page.frontmatter.heroimage"
       :caption="$page.frontmatter.herocaption"
     >
     
     <div class="w-100 pv5-ns flex-ns items-end-ns justify-between-ns" id="shareable">
       <div class="avenir lh-copy measure-wide mt4 mt0-ns f5 f4-ns center">
         <Content slot-key="body"/>
       </div>
       <div class="f6 measure-narrow-ns bg-black-05 black-70 ph3 ph4-l pv3 mt3-ns mh0 mh2-m mh4-ns br3 avenir">
         <Content slot-key="sidebar"/>
       </div>
     </div>


     </SectionHeader>

   </div>
</template>

<script>
import shareThis from 'share-this'
import * as twitterSharer from 'share-this/dist/sharers/twitter'
import * as facebookSharer from 'share-this/dist/sharers/facebook'
import * as redditSharer from 'share-this/dist/sharers/reddit'

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
    const selectionShare = shareThis({
     selector: '#shareable',
     sharers: [twitterSharer, facebookSharer, redditSharer]
   }).

   selectionShare.init();

    const blocks = document.querySelectorAll(".year5 blockquote");
    const paras = document.querySelectorAll('#year5 p, #year5 ul');
    const blockparas = document.querySelectorAll('blockquote p');
    const h = document.querySelectorAll('#year5 h2');
    const links = document.querySelectorAll('.year5 p a');
    const hero = document.querySelectorAll('.hero p');

    Array.from(paras).forEach((el) => {
      el.classList.add('f5','f4-ns','lh-copy','measure','center');
    });

    Array.from(blocks).forEach((el) => {
      el.classList.add('ph0','f3','f1-ns','measure-narrow','tc','bl0','center');
    });

    Array.from(blockparas).forEach((el) => {
      el.className = '';
      el.classList.add('fw9','lh-title','lh-title-ns','athelas','mv4','mv5-ns','center');
    });

    Array.from(h).forEach((el) => {
      el.className ='';
      el.classList.add('tc', 'pv4','pv5-ns', 'mt5', 'f3','fw7','measure','center','avenir','lh-title');
    });

    Array.from(links).forEach((el) => {
      el.classList.add('link','dim');
    });

    Array.from(hero).forEach((el) => {
      el.className ='';
      el.classList.add('pv0','mv0','f7');
    });

  },
  methods: {
  }
}
</script>
<style scoped>
</style>
