<template slot="page-top">

    <div class="w-100 mw9 center pv5 ph3 ph3-l avenir" id="home">

      <div class="sans-serif mv5">
        <span class="db tc mb3 tracked ttu f6 f3-ns">
          <span class="fw7">Post-Industrial</span>
          <span class="black-40 fw4">Design School</span>
        </span>
        <span class="db f7 f6-ns tc mb6 mb5-ns black-60">
          {{ $page.frontmatter.subtitle }}
        </span>
      </div>

      <div class="w-100 cf mb4">
        <span class="bb b--near-white f7 fw5 tracked ttu db mt4 mb3 pb1 ml1 black-60">Projects</span>

        <article v-for="p in $page.frontmatter.projects" class="mt3 mt0-ns fl w-100 w-50-m w-third-ns pa1-ns">
          <div class="pa2">
            <a :href="p.url" class="fl w-100 border-box overflow-hidden ba b--black-40 db mb3" title="">
              <div class="grow cover bg-center pv5 pv6-l" v-bind:style="{ backgroundImage: 'url(' + p.image + ')'}"></div>
            </a>

            <span class="db f5 f4-m f4-l mt3 mb1 black-90">
              <a :href="p.url" class="link dim fw6">
                  {{ p.name }}
              </a>
              <span class="dib fw6 br2 black-40 f7 ml1 lh-title sans-serif pa1 bg-black-05">{{ p.year }}</span>
            </span>

            <h3 class="f6 f5-ns fw4 mt1 black-70 lh-copy measure">{{ p.description }}</h3>
          </div>
        </article>

      </div>
      <div class="pb6 w-100">

          <div class="cf w-100">

            <div class="f5 f5-l fn fl-ns black-70 avenir w-third-m w-25-ns">
              <span class="bb b--near-white f7 fw5 tracked ttu db mt4 mb4 mb4-ns pl2-ns pb1 black-60">Talks & Essays</span>
              <div class="measure-ns ml1-l ph0 pb3 ph2-l">
                <HomePageLinks/>
              </div>

              <span class="bb b--near-white f7 fw5 tracked ttu db mt4 mb4 mb4-ns pl2-ns pb1 black-60">Team</span>
              <div class="measure-ns ml1-l ph0 pb3 ph2-l">
                <Content slot-key="about"/>
              </div>
            </div>

            <div class="fn fl-ns avenir w-two-thirds-m w-75-ns pl4-m pl5-l" id="mission">
              <span class="w-90-ns bb b--near-white f7 fw5 tracked ttu db mt4 mb1 pb1 black-60">Purpose</span>
              <div class="lh-copy measure-wide-l ml1 mt4 mt0-ns f5 f4-ns pa2-l">
                <Content slot-key="mission"/>
              </div>
            </div>



          </div>
        </div>
  </div>
</template>

<script>
import Tachyons from 'tachyons'

export default {
  components: {  },
  props: [''],
  data () {
    return {
    }
  }
}
</script>

<style>
div#mission strong {
  color: #444;
}

div#home a {
  color: #333;
  transition: color .15s ease-in;
}

div#home a:hover {
  color: #888;
  transition: color .15s ease-in;
}

</style>
