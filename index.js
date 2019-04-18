import Layout from './components/Layout.js'
import Scene from './components/Scene.js'

new Vue({
    el: '#app',
    components: { Layout, Scene },
    template: `
    <Layout>
      <Scene>
        
      </Scene>
    </Layout>
    `,
})