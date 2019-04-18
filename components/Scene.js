export default {
	// x y z
	// vp üa le
    template: `
        <a-scene>
       	  <a-entity position="0 0 -4">
            <slot />   
            <a-plane class="p6rand" rotation="-90 0 0" 
            width="4" height="4" color="#7BC8A4"></a-plane>    	  	
       	  </a-entity>
          <a-sky color="#ECECEC"></a-sky>
        </a-scene>
    `
}