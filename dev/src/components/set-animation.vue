<template>
  <section class="section" id="example-animation">
    <h2 class="title is-2">Set animation</h2>
    <div class="content">
      <p>
        You can define the transition with the <code>animation</code> property. There 4 animations made:
        <code>ani-slide</code> <i>default</i>, <code>ani-slide-x</code>, <code>ani-slide-y</code>,
        <code>ani-fade</code> and <code>ani-none</code> <i>no animation</i>

      </p>
    </div>
    <div class="columns">
      <div class="column is-half">
        <pre><code class="htmlbars">{{ code }}</code></pre>
      </div>
      <div class="column">
        <h3 class="title is-3">Select animation</h3>
        <div class="control is-horizontal">
          <div class="control-label"><label for="animation" class="label">animation</label></div>
          <div class="control is-expanded">
            <div class="select is-fullwidth "><select name="" id="animation" v-model="animation">
                <option value="ani-slide">ani-slide (default)</option>
                <option value="ani-slide-x">ani-slide-x</option>
                <option value="ani-slide-y">ani-slide-y</option>
                <option value="ani-fade">ani-fade</option>
                <option value="ani-none">ani-none (no animation)</option>
              </select></div>
          </div>
        </div>
        <dropdown :visible="visible" :animation="animation" @clickOut="visible = false">
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
`<dropdown :visible="visible" :animation="animation" @clickout="visible = false">
  <span class="link" @click="visible = !visible">click here</span>
  <div slot="dropdown" class="dialog">
    hello world
  </div>
</dropdown>`)

export default {
  data() {
    return { visible: false, animation: 'ani-slide', code }
  },

  components: { dropdown }
}

</script>
<style lang="sass"></style>
