<template>
  <article class="cf ph3 ph5-ns pv4 pv5-ns br3 mb3" v-bind:class="[bgclass, txtcolor]">
    <header class="fn fl-ns w-40-ns pr4-ns">
      <span class="avenir pv3 db f1 f-subheadline-ns fw6 black-60" v-bind:class="titlecolor">{{ name }}</span>
    </header>
    <div class="avenir fn fl-ns w-100-m w-60-ns lh-copy measure-wide mt4 mt0-ns f5 f4-ns">
      <slot></slot>
    </div>
  </article>
</template>

<script>

export default {
  name: 'BasicPanel',
  props: ['name','bgclass','txtcolor','titlecolor'],
  data () {
    return {
    }
  }
}
</script>
