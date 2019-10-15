<template>
  <div>
   <div class="db dt-l w-100 mw9 center f4 f3-ns">
    <div class="v-mid-ns db dtc-ns w-100 w-50-m w-70-ns ph0 mh0 lh-title fw5 titles ">
      <Content slot-key="titles"/>
      <div class="w-100 fw4 f6">
        <Content slot-key="credits"/>
      </div>
    </div>
    <div class="v-mid-ns db dtc-ns w-100 w-50-m w-30-ns f5-ns mid-purple pl4-m pl0-ns">
     <Content slot-key="heroimage"/>
    </div>

  </div>

   <div class="cf w-100 mw9 center pa0 pa4-ns avenir" id="year5">
     <div class="body center">
       <Content slot-key="paul"/>
       <Content slot-key="body"/>
     </div>
   </div>
   <div class="w-100 mw9 center pa3 pv5-ns avenir" id="footer">
     <div class="measure-wide center">
       <Content slot-key="footer"/>
     </div>
   </div>
 </div>
</template>

<script>
import Tachyons from 'tachyons'

export default {
  components: { },
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
    const links = document.querySelectorAll('.year5 p a');

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

  },
  methods: {
  }
}
</script>

<style>
.year5 .navbar, .year5 .navbar .links, .year5 .navbar, .year5 .sidebar, .year5 {
  background-color: rgb(254, 252, 255);

}

.year5 .sidebar-heading.open {
  display: none;
}

.year5 h1, .year5 h2, .year5 p {
  color: #330933;
}

.year5 .navbar {
  border-bottom: 1px solid transparent;
}

#year5 .body ul li {
    margin-left: 1em;
    margin-bottom: 1em;
}

#year5 blockquote {
  border-left: 0 !important;
}

.year5 .titles {
  margin-left: auto;
  margin-right: auto;
}

.year5 .titles h2 {
  font-size: 6rem;
  margin: 0;
  padding: 0;
  border-bottom: 0;
}

.year5 .subtitle {
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 500;
}

@media screen and (min-width: 720px) {
  .year5 .sidebar {
    top: 32%;
  }
}

@media screen and (max-width: 520px) {
  .year5 ul.sidebar-links.sidebar-group-items li a.sidebar-link {
    font-size: 0.9rem;
  }

  .year5 .titles h2#year-5 {
    font-size: 5rem;
    margin-bottom: 0;
    padding-bottom: 0;
  }

}

</style>
