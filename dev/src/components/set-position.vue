<template>
<section class="section" id="example-position">
  <h2 class="title is-2">Set position</h2>
  <div class="content">
    <p>
      You can set the dropdown position with respect to the link position.
    </p>
  </div>

  <div class="columns">
    <div class="column is-half">
      <pre><code class="htmlbars">{{ code }}</code></pre>
    </div>

    <div class="column">
      <h3 class="subtitle is-3">Select position</h3>
      <div class="control is-horizontal">
        <div class="control-label"><span class="label">Link position</span></div>

        <div class="control is-grouped">
            <div class="control is-expanded">
              <div class="select is-fullwidth"><select name="" id="" v-model="position[0]">
                  <option value="left">left</option>
                  <option value="center">center</option>
                  <option value="right">right (default)</option>
                </select></div>
            </div>        
            <div class="control is-expanded">
              <div class="select is-fullwidth"><select name="" id="" v-model="position[1]">
                  <option value="top">top (default)</option>
                  <option value="center">center</option>
                  <option value="bottom">bottom</option>
                </select></div>
            </div>
        </div>
      </div>
      <div class="control is-horizontal">
        <div class="control-label"><span class="label">Dropdown position</span></div>

        <div class="control is-grouped">
            <div class="control is-expanded">
              <div class="select is-fullwidth"><select name="" id="" v-model="position[2]">
                  <option value="left">left (default)</option>
                  <option value="center">center</option>
                  <option value="right">right</option>
                </select></div>
            </div>        
            <div class="control is-expanded">
              <div class="select is-fullwidth"><select name="" id="" v-model="position[3]">
                  <option value="top">top (default)</option>
                  <option value="center">center</option>
                  <option value="bottom">bottom</option>
                </select></div>
            </div>
        </div>
      </div>

      <br>
      <dropdown :visible="visible" :position="position" @clickOut="visible = false">
        <div class="inlineBlock hero is-primary" @click="visible = true">
          <div class="hero-body">Link</div> 
        </div>
        <div slot="dropdown" class="dialog">
          Position: {{ position }} 
        </div>
      </dropdown>
    </div>
  </div>
</section>
</template>

<script>
import dropdown from './vue-my-dropdown'

const code = (
`<dropdown :visible="visible" :position="position" @clickOut="visible = false">
  <div class="inlineBlock hero is-primary" @click="visible = true">
    <div class="hero-body">Link</div> 
  </div>
  <div slot="dropdown" class="dialog">
    Position: {{ position }} 
  </div>
</dropdown>`)

export default {
  data() {
    return {
      visible: false,
      code,
      position: ['right', 'top', 'left', 'top']
    }
  },
  components: { dropdown }
}

</script>

<style lang="sass">
  .inlineBlock
    width: 100px
    height: 100px
    text-align: center
    cursor: pointer

  
</style>
