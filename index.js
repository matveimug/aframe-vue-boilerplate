import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box },
    template: `
    <Layout>
      <Scene>
        <Box position="0 0.5 0" color="salmon" />
      </Scene>
    </Layout>
    `
})