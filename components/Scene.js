export default {
    template: `
        <a-scene>
          <a-entity position="0 0 -4">
            <slot />
            <a-plane rotation="-90 0 0" width="10" height="10" color="#7BC8A4"></a-plane>
            <a-sky color="#ECECEC"></a-sky>
          </a-entity>
        </a-scene>
    `
}