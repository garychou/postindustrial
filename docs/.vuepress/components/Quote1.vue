<template>
  <div class="pv2 pa2-ns">
    <blockquote class="athelas ml0 mt0 pl3 pl4-ns black-80 bl bw1 bw2-ns b--medium-gray">
      <p class="f5 f4-m f4-l lh-copy measure mt0">
        <slot></slot>
      </p>
      <cite v-if="cite" class="f6 ttu tracked fs-normal mt4 dib">
        ―{{this.cite}}
        <span v-if="reference">, <a :href="this.url" class="link dim black-40">{{reference}}</a></span>
      </cite>
    </blockquote>
  </div>
</template>
<script>

export default {
  components: { },
  props: ['cite','url','reference'],
  data () {
    return {
    }
  }
}
</script>
<style></style>
