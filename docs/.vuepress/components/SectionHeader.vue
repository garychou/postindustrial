<template>
  <article class="mh0 pa0 ph4-m ph4-l br3">
    <div class="tl tc-ns pv2">
      <h1 class="avenir fw7 measure lh-title f3 f1-ns black-70 tl">{{ title }}</h1>
      <time class="f6 ttu db mb3 mb4-ns fw6 tracked black-80 tl">
      {{ byline }}, <span class="fw4 black-50">{{ subtitle }}</span>
      </time>
    </div>
    <div class="w-100">
      <img :src="imageurl" class="w-100">
      <span class="db mt2 f7 f6-ns lh-copy ml0 ph2-ns pa0-ns gray tl tc-ns">
        {{ caption }}
      </span>
    </div>

    <slot></slot>

  </article>
</template>

<script>

export default {
  name: 'SectionHeader',
  props: ['title','byline','subtitle','imageurl','caption'],
  data () {
    return {
    }
  }
}
</script>
