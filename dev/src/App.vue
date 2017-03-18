<template>
  <div id="app">
      <p class="button-menu">
        <dropdown
          :visible="menuVisibility"
          @clickOut="menuVisibility = false"
          :position="['right', 'top', 'right', 'top']">

            <a href="#" class="button is-large is-primary"
              @click="$event.preventDefault(); menuVisibility = !menuVisibility">
                <span class="icon is-medium"><i class="fa fa-bars"></i></span>
            </a> 

            <div class="dialog no-padding" slot="dropdown">
              <aside class="menu top-menu">
                <ul class="menu-list">
                  <li><a href="#" @click="goTo($event, 'usage')">Usage</a></li>
                  <li><a href="#" @click="goTo($event, 'guide')">Guide</a></li>
                  <li><a href="#" @click="goTo($event, 'examples')">Examples</a></li> 
                </ul>
              </aside> 
            </div>
        </dropdown>
      </p>
    <header class="hero is-light is-bold is-fullheight">
      <img src="./assets/logo.png" alt="vuejs"/>
      <div>
        Vue my dropdown. Simple and powerfull dropdown for Vuejs.
        <br/><br/>
        <a href="https://github.com/davidnotplay/vue-my-dropdown"
        class="button is-primary is-large" target="_blank">
          <span class="icon is-medium" style="color: #fff">
            <i class="fa fa-github"></i>
          </span>
          <span style="color: #fff">Github</span>
        </a>
      </div>
    </header>
    <div>
      <section class="section" id="usage">
        <h2 class="title is-2">Usage</h2> 
        <div class="content">
        <p>
          Use node and npm to download vue-my-dropdown
          <pre><code class="nohighlight">npm install --save vue-my-dropdown</code></pre>
        </p>

        <p>
          Now you can import vue-my-dropdown in your code and use it. 
          <pre><code class="javascript">
import dropdown from 'vue-my-dropdown';

export default {
  //...
  components: { dropdown, /*...*/ }
}
          </code></pre>
        </p>
        </div>
      </section>

      <section class="section" id="guide">
        <h2 class="title is-2">Guide</h2>

        <div class="tabs">
          <ul>
            <li :class="{'is-active': tab1 == 'properties'}"><a href="#" @click="$event.preventDefault(); tab1 = 'properties'">Properties</a></li>
            <li :class="{'is-active': tab1 == 'events'}"><a href="#" @click="$event.preventDefault(); tab1 = 'events'">Events</a></li>
            <li :class="{'is-active': tab1 == 'slots'}"><a href="#" @click="$event.preventDefault(); tab1 = 'slots'">Slots</a></li>
          </ul> 
        </div>
        <table class="table" v-show="tab1 == 'properties'">
          <thead>
            <tr>
              <th style="width: 15%">Name</th>
              <th style="width: 20%">Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>visible</td>
              <td><code>Boolean</code></td>
              <td>
                Dropdown visibility. 
              </td>
            </tr>
            <tr>
              <td>position</td>
              <td><code>Array</code></td>
              <td>
                  <p>
                    Dropdown position relative to the link. The properties is an array with 4 values.
                    The 2 first values define the link corner. The 2 last values define the dropdown
                    corner.
                    <ul>
                      <li>Horizontal link position: <code>left</code>
                      <code>center</code>
                      <code>right</code></li>
                      <li>Vertical link position: <code>top</code>
                      <code>center</code>
                      <code>right</code></li>
                      <li>
                        Horizontal dropdown position 
                        <code>left</code>
                        <code>center</code>
                        <code>right</code>
                      </li>

                      <li>
                        Vertical dropdown position 
                        <code>top</code>
                        <code>center</code>
                        <code>bottom</code> 
                      </li>
                    </ul> 
                    <a href="#example-position">See example</a>
                  </p>
              </td>
            </tr>
            <tr>
              <td>animation</td>
              <td><code>String</code></td>
              <td>
                Show and hidden dropdown animation. This property is used in the
                <a href="https://vuejs.org/v2/guide/transitions.html">transtion vuejs component.</a>
                There are 5 animations included in the component:
                <ul>
                  <li><code>ani-slide</code> <i>Default</i></li>
                  <li><code>ani-slide-x</code></li>
                  <li><code>ani-slide-y</code></li>
                  <li><code>ani-fade</code></li>
                  <li><code>ani-none</code></li>
                </ul>
                <a href="#example-animation">See example</a>
              </td>
            </tr>
          </tbody>
        </table>


        <table v-show="tab1 == 'events'" class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <td>clickOut</td>
              <td>
                Event triggered when click outside of the dropdown.
                It is usefull for close the dropdown. <a href="#click-out-position">See example</a>
              </td>
            </tr>
          </tbody>
        </table>

        <table v-show="tab1 == 'slots'" class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead> 

          <tbody>
            <tr>
              <td>
                <i>Default</i>
              </td>
              <td>
                Visible element in the component. The dropdown dialog will show in a position
                relative to this html element.
              </td>
            </tr>
            <tr>
              <td>dropdown</td>
              <td>
                Dropdown content.
              </td>
            </tr>
          </tbody>
        </table>
      </section>      

      <basic/>
      <click-out/>
      <customize-event/>
      <set-position/>
      <set-animation/>
      <nested/>
      <section class="empty-block">
      </section>
      <section class="footer hero is-dark is-bold">
        <div class="container">
          <div class="has-text-centered">
              <a href="https://www.youtube.com/watch?v=8Pa9x9fZBtY" target="_blank">
                <span class="new">new</span> Vue({ <span class="music fa fa-music"></span> })
              </a>
          </div>
        </div>
      </section>
    </div>
 </div>
</template>

<script>
import dropdown from './components/vue-my-dropdown'
import setPosition from './components/set-position'
import basic from './components/basic-test'
import clickOut from './components/click-out'
import customizeEvent from './components/customize-event'
import setAnimation from './components/set-animation'
import nested from './components/nested'
import hljs from './hljs'

export default {
  name: 'app',
  data() {
    return {
      tab1: 'properties',
      menuVisibility: false
    }
  },
  components: { dropdown, basic, setPosition, clickOut, customizeEvent, setAnimation, nested },
  methods: {
    goTo(evt, go) {
      evt.preventDefault()
      this.menuVisibility = false
      window.location.href = '#' + go
    }
  },

  mounted() {
    hljs()
  }
}
</script>

<style lang="sass">

header
    height: 100vh
    background: #33aaff
    padding: 20%
    text-align: center
    z-index: 9
    position: fixed
    width: 100vw
    z-index: 1 !important

    img
        display: block
        margin: auto

section
  z-index: 10 !important
  position: relative
  top: 100vh

.dialog
    background: #fff
    border: 1px solid #ccc
    box-shadow: 2px 2px 6px 0 #aaa
    padding: .5rem
    z-index: 101 !important

    &.no-padding
      padding: 0
      border: none !important

pre > code, code
  font-size: 14px !important

.link
  cursor: pointer

.button-menu
  position: fixed !important
  z-index: 100 !important
  top: 30px
  right: 30px 

  .button
    border: none !important
    box-shadow: 3px 3px 6px 0 #999 !important
  
  .dialog
    z-index: 101 !important


.top-menu
  position: relative !important
  margin-top: -2px !important

.empty-block
  height: 100vh
  display: block

.footer
  font-size: 16px !important
  font-family: "Courier New", Courier, monospace 
  .new
    font-size: 16px !important
    color: #5aa5d8
  .music
    font-size: 16px !important
    color: #c964aa
    vertical-align: middle 
    display: inline-block
    margin-top: -3px

</style>
