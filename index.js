import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall },
    template: `
    <Layout>
      <Scene>
      	<Wall position="0 0 -5"/>
      	<Wall position="-5 0 0" rotation="0 90 0"/>
      	<Wall position="5 0 0" rotation="0 -90 0"/>
      	<Wall position="0 0 5" rotation="0 -180 0"/>
      </Scene>
    </Layout>
    `,
})