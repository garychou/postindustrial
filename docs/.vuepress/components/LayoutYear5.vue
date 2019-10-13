<template>
  <Layout>
   <template slot="page-top">

     <div class="w-100 mw9 center pa3 pa4-ns measure avenir f6">
       <Content slot-key="header"/>
     </div>

     <div class="w-100 mw9 center pa3 pa4-ns avenir" id="year5">
       <div class="body center">
         <Content slot-key="paul"/>
        <Content slot-key="body"/>
       </div>

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
  mounted(){
    const blocks = document.getElementsByTagName("BLOCKQUOTE");
    const paras = document.querySelectorAll('#year5 p, #year5 ul');
    const blockparas = document.querySelectorAll('blockquote p');
    const h = document.querySelectorAll('#year5 h2');

    Array.from(paras).forEach((el) => {
      el.classList.add('f5','f4-ns','lh-copy','measure','center');
    });

    Array.from(blocks).forEach((el) => {
      console.log(el);
      el.classList.add('ph0','f3','f1-ns','measure-narrow','tc','bl0','center');
    });

    Array.from(blockparas).forEach((el) => {
      el.className = '';
      el.classList.add('fw9','lh-title','lh-title-ns','athelas','mv4','mv5-ns','center');
    });

    Array.from(h).forEach((el) => {
      el.classList.add('tc', 'pv4','pv5-ns', 'mt5', 'f3','fw7','measure','center','avenir','lh-title');
    });

  },
  methods: {
  }
}
</script>

<style>
#year5 .body ul li {
    margin-left: 1em;
    margin-bottom: 1em;
}

#year5 blockquote {
  border-left: 0 !important;
}

</style>
