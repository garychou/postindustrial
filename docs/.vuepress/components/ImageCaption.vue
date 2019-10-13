<template>
  <div class="w-100 tc">
    <img :src="url" class="w-100 w-80-ns mt4 mt6-ns mb1-ns"/>
    <span class="avenir f6 tc mb4 mb6-ns db lh-title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ImageCaption',
  props: ['url'],
  data () {
    return {
    }
  }
}
</script>
