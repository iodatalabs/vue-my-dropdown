<template>
  <section class="section">
    <h2 class="title is-2">Nest dropdown</h2> 
    <div class="content">
      <p>
        You can nest dropdowns.
      </p>
    </div>
    <div class="columns">
      <div class="column is-half">
        <pre><code class="htmlbars">{{ code }}</code></pre>
      </div>
      <div class="column">
        <dropdown :visible="visible" @clickOut="visible = false">
          <span class="link" @click="visible = !visible">Show menu</span>
          <div slot="dropdown" class="dialog no-padding">
            <aside class="menu">
              <ul class="menu-list">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li>
                  <dropdown :visible="visibleNested" @clickOut="visibleNested = false">
                    <span @click="visibleNested = !visibleNested">
                      <a href="#" @click="$event.preventDefault()">
                        Item 3 <i class="icon is-small"><span class="fa fa-caret-right"></span></i>
                      </a>
                     </span>
                      <div slot="dropdown" class="dialog no-padding">
                        <ul class="menu-list">
                          <li><a href="#">subitem 1</a></li>
                          <li><a href="#">subitem 2</a></li>
                          <li><a href="#">subitem 3</a></li>
                        </ul>
                      </div>
                  </dropdown> 
                </li> 
              </ul> 
            </aside>
          </div>
        </dropdown> 
      
      </div>
    </div>

  </section>
</template>

<script>
import dropdown from './vue-my-dropdown'

const code = (
`<dropdown :visible="visible" @clickOut="visible = false">
  <span class="link" @click="visible = !visible">click here</span>
  <div slot="dropdown" class="dialog no-padding">
    <aside class="menu">
      <ul class="menu-list">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#" @click="$event.preventDefault()">
          <dropdown :visible="visibleNested" @clickOut="visibleNested = false">
            <span @click="visibleNested = !visibleNested">
              Item 3 <i class="icon is-small"><span class="fa fa-caret-right"></span></i>
            </span>
            <div slot="dropdown" class="dialog no-padding">
              <ul class="menu-list">
                <li><a href="#">subitem 1</a></li>
                <li><a href="#">subitem 2</a></li>
                <li><a href="#">subitem 3</a></li>
              </ul>
            </div>
          </dropdown> 
        </a></li> 
      </ul> 
    </aside>
  </div>
</dropdown>`)

export default {
  data() {
    return { visible: false, visibleNested: false, code }
  },
  components: { dropdown }
}
</script>

<style lang="sass">
.dialog ul ul
  border: none !important
  width: 90px
  margin: 0 !important
  padding: 0 !important

</style>
