import Layout from './components/Layout.js'
import Scene from './components/Scene.js'

new Vue({
    el: '#app',
    components: { Layout, Scene },
    template: `
    <Layout>
      <Scene>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
          <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
          <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      </Scene>
    </Layout>
    `,
})