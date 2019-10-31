<template>
  <div class="w-100 tc mt4 mv5-ns">
    <img v-for="u in items"
      :src="u"
      class="w-100 mb1-ns ba b--black-10 pa0"
      :class="imagewidth ? imagewidth : 'w-70-l'"
      alt="alt"
     />
    <span class="avenir f7 f6-ns tc mb4 db lh-title center caption"
    :class="imagewidth ? imagewidth : 'w-70-l'"
      >
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ImageCaption',
  props: [
    'url','imagewidth','margin', 'alt'
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

  },
  mounted() {
    const captions = document.querySelectorAll('.caption p');

    Array.from(captions).forEach((el) => {
      el.className ='';
      el.classList.add('tc', 'pv0','mv1','center');
    });
  }
}
</script>
