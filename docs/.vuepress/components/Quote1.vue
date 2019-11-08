<template>
  <div class="pa2">
    <blockquote class="athelas ml0 mt0 pl4 black-80 bl bw2 b--gray">
      <p class="f5 f4-m f4-l lh-copy measure mt0">
        <slot></slot>
      </p>
      <cite v-if="cite" class="f6 ttu tracked fs-normal mt4 dib">
        ―{{this.cite}}
        <span v-if="reference">, <a href="url" class="link dim underline black-40">{{reference}}</a></span>
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
