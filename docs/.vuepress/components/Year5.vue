<template>
  <div>
   <div class="w-100 mw8 pt4 center flex flex-column">

     <div class="w-100 lh-title fw5 titles mw7 center">
      <h2 class="f-subheadline f-headline-l mv0 pv0">{{ $frontmatter.title }}</h2>
      <p class="lh-copy mt0 pt0 f3 fw4">{{ $frontmatter.subtitle }}</p>
      <p class="f6 ttu db tracked tl">
        {{ $frontmatter.byline }}, <span class="db dib-ns fw6 black-70">{{ $frontmatter.conversationDate }}</span>
      </p>
      <div class="w-100 fw4 f6 f5-ns pr2 pv0 mv0">
        <Content slot-key="credits"/>
      </div>
     </div>

    <div class="w-100 mid-purple mw6 center pv5 ">
      <div class="tc mb0-ns">
        <img :src="$frontmatter.heroimage" class="w-100 mb1-ns ba b--black-30 pa0"/>
        <div class="avenir f6-ns tc db lh-title center hero">
          <Content slot-key="herocaption"/>
        </div>
      </div>
    </div>



  </div>

   <div class="cf w-100 mw9 center pa0 pa4-ns avenir" id="year5">
     <div class="body center">
       <Content slot-key="paul"/>
       <Content slot-key="body"/>
     </div>
   </div>
   <div class="w-100 mw9 center pa3 pv5-ns avenir" id="footer">
     <div class="center">
       <Content slot-key="footer"/>
     </div>
   </div>
 </div>
</template>

<script>
import shareThis from 'share-this'
import * as twitterSharer from 'share-this/dist/sharers/twitter'
import * as facebookSharer from 'share-this/dist/sharers/facebook'
import * as emailSharer from 'share-this/dist/sharers/email'

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
    const selectionShare = shareThis({
     selector: '#year5',
     sharers: [twitterSharer, facebookSharer, emailSharer]
   });

   if (!window.matchMedia
           || !window.matchMedia("(pointer: coarse)").matches) {
       selectionShare.init();
   }

    const blocks = document.querySelectorAll(".year5 blockquote");
    const paras = document.querySelectorAll('#year5 p, #year5 ul');
    const blockparas = document.querySelectorAll('.year5 blockquote p');
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

<style>
.year5 .navbar, .year5 .navbar .links, .year5 .navbar, .year5 .sidebar, .year5 {
  background-color: rgb(254, 252, 255);
}

.year5 .sidebar-heading.open {
  display: none;
}

.year5 h1, .year5 h2, .year5 p {
  color: #330933;
  position: relative;
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

@media screen and (min-width: 720px) {
  .year5 .sidebar {
    top: 32%;
  }
}

@media screen and (max-width: 520px) {
  .year5 ul.sidebar-links.sidebar-group-items li a.sidebar-link {
    font-size: 0.9rem;
  }

}

</style>
<style src="share-this/dist/share-this.css"></style>
