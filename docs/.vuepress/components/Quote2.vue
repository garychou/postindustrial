<template>
  <div class="pa2">
    <blockquote class="ph0 f3 f1-ns measure-narrow tc bl0 center mv4 mv5-ns">
      <p class="fw9 lh-title lh-title-ns athelas center">
        <slot></slot>
      </p>
      <cite v-if="cite" class="f6 ttu tracked fs-normal mt2 dib">
        ―{{this.cite}}
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
