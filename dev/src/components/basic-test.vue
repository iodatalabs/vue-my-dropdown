<template>
  <section class="section" id="examples">
    <h2 class="title is-2">Basic example</h2> 
    <div class="columns">
      <div class="column is-half">
        <pre><code class="htmlbars">{{ code }}</code></pre>
      </div>
      <div class="column">
        <dropdown :visible="visible">
          <span class="link" @click="visible = !visible">click here</span>
          <div slot="dropdown" class="dialog">
            hello world 
          </div>
        </dropdown> 
      
      </div>
    </div>

  </section>
</template>

<script>
import dropdown from './vue-my-dropdown'

const code = (
`<span class="link" @click="visible = !visible">click here</span>
  <div slot="dropdown" class="dialog">
    hello world 
    </div>
</dropdown>`)

export default {
  data() {
    return { visible: false, code }
  },
  components: { dropdown }
}
</script>

<style lang="sass">

</style>
