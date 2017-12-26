<template>
  <section class="section" id="example-positioned">
    <h2 class="title is-2">Positioned event (>=2.1.0)</h2>
    <div class="content">
      <p>
        Event emmited when the dropdown is shown. The event function has a parameter with the
        style of the dropdown html element.
      </p>
    </div>
    <div class="columns">
      <div class="column is-half">
        <pre><code class="htmlbars">{{ code }}</code></pre>
      </div>
      <div class="column">
        <h3 class="title is-3">Event positioned</h3>
        <dropdown :visible="visible" @clickout="visible = false" @positioned="dropdownStyles = $event">
          <span class="link" @click="visible = !visible">click here</span>
          <div slot="dropdown" class="dialog">
            <b>Dropdown styles:</b>
              <ul>
                <li>Left: {{ dropdownStyles.left }}</li>
                <li>Top: {{ dropdownStyles.top }}</li>
                <li>Position: {{ dropdownStyles.position }}</li>
                <li>TransformOrigin: {{ dropdownStyles.transformOrigin }}</li>
              </ul>
          </div>
        </dropdown>
      </div>
    </div>
  </section>
</template>

<script>
import dropdown from 'vue-my-dropdown'

const code = (
`<dropdown :visible="visible" @clickout="visible = false" @positioned="dropdownStyles = $event">
  <span class="link" @click="visible = !visible">click here</span>
  <div slot="dropdown" class="dialog">
    <b>Dropdown styles:</b>
      <ul>
        <li>Left: {{ dropdownStyles.left }}</li>
        <li>Top: {{ dropdownStyles.top }}</li>
        <li>Position: {{ dropdownStyles.position }}</li>
        <li>TransformOrigin: {{ dropdownStyles.transformOrigin }}</li>
      </ul>
  </div>
</dropdown>
`)

export default {
  data() {
    return { visible: false, dropdownStyles: {}, code }
  },
  components: { dropdown }
}
</script>

<style>

</style>
