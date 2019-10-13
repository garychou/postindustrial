<template>
  <div class="w-100 tc">
    <img v-for="u in items" :src="u" class="w-100 mt4 mt4-ns mb1-ns"
     :class="imagewidth ? imagewidth : 'w-70-ns'"/>
    <span class="avenir f6 tc mb4 mb4-ns db lh-title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ImageCaption',
  props: [
    'url','imagewidth'
  ],
  data () {
    return {
      items: [],
    }
  },
  created(){
    if(Array.isArray(this.url)) {
      this.items = this.url;
    } else {
      this.items.push(this.url);
    }

  }
}
</script>
<!--


TODOs.

2. Multiple images component
3. A Name urls don't work, not scrolling.

--
1. Fix Header Site name
2. Style the header of Year 5
4. Add the acknowledgments to the end of Year 5
-->
