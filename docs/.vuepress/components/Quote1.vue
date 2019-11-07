<template>
  <div class="pa4">
    <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
      <p class="f5 f4-m f2-l lh-copy measure mt0">
        <slot></slot>
      </p>
      <cite class="f6 ttu tracked fs-normal mt4 dib">―{{this.cite}}</cite>
    </blockquote>
  </div>
</template>
<script>

export default {
  components: { },
  props: ['cite'],
  data () {
    return {
    }
  }
}
</script>
<style></style>
