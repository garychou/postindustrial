<template>
  <div></div>
</template>

<script>
import shareThis from 'share-this'
import * as twitterSharer from 'share-this/dist/sharers/twitter'
import * as facebookSharer from 'share-this/dist/sharers/facebook'
import * as emailSharer from 'share-this/dist/sharers/email'

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
     selector: '.content__default',
     sharers: [twitterSharer, facebookSharer, emailSharer]
   });

   if (!window.matchMedia
           || !window.matchMedia("(pointer: coarse)").matches) {
       selectionShare.init();
   }

  },
  methods: {
  }
}
</script>
<style src="share-this/dist/share-this.css"></style>
