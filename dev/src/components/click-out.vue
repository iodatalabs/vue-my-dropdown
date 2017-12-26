<template>
  <section class="section" id="click-out-position">
    <h2 class="title is-2">Click out</h2>
    <div class="content">
      <p>
        You can define the behavior when you click outside of the dropdown.
      </p>
    </div>

    <div class="columns">
      <div class="column is-half">
        <pre><code class="htmlbars">{{ code }}</code></pre>
      </div>
      <div class="column">
        <dropdown :visible="visible" @clickOut="visible = false">
          <span class="link" @click="visible = true">Click me</span>
          <div class="dialog" slot="dropdown">Click out to hide me.</div>
        </dropdown>
      </div>
    </div>

  </section>
</template>
<script>

import dropdown from './vue-my-dropdown'

const code = (
`<dropdown :visible="visible" @clickout="visible = false">
  <span class="link" @click="visible = true">Click me</span>
  <div class="dialog" slot="dropdown">Click out to hide me.</div>
</dropdown>`)

export default {
  data() {
    return { visible: false, code }
  },

  components: { dropdown }
}

</script>
<style lang="sass"></style>
