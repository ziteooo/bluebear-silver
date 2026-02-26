document.addEventListener("DOMContentLoaded", () => {
    // const sceneEl = document.querySelector('a-scene');

	// let arSystem;
	// sceneEl.addEventListener('loaded', function () {
	//   arSystem = sceneEl.systems["mindar-image-system"];
	// });

    const target = document.querySelector('#target');
    const audio = document.querySelector('#sound');
    const btn = document.querySelector('#audio-toggle');
    const icon = document.querySelector('#mute-icon');
    const model = document.querySelector('#bear')


    btn.addEventListener('click', () => {
        audio.muted = !audio.muted;

        // Toggle Icon classes
        if (audio.muted) {
            icon.classList.remove('fa-volume-high');
            icon.classList.add('fa-volume-xmark');
        } else {
            icon.classList.remove('fa-volume-xmark');
            icon.classList.add('fa-volume-high');
            // Force play
            // audio.play();
        }
    });

    // model.addEventListener('model-loaded', () => {
    //     model.setAttribute('animation-mixer', {
    //         clip: '*',
    //         timeScale: 0,
    //         startAt: 0,
    //     })
    // })

    // Detect target found
    target.addEventListener("targetFound", () => {
        console.log("Target detected: Volume 1.");
        // arSystem.start();
        audio.play();
        window.setTimeout(function() {
            audio.volume = 1;
        })
        // audio.currentTime = model.currentTime
        // model.setAttribute('animation-mixer', 'timeScale: 1' );

    });

    // Dectect target lost
    target.addEventListener("targetLost", () => {
        console.log("Target lost: Volume 0.");
        audio.play();
        window.setTimeout(function() {
            audio.volume = 0;
        })
    });

    // AFRAME.registerComponent("foo", {
    // init: function() {
    //     // wait until the model is loaded
    //     this.el.addEventListener("model-loaded", e => {
    //     // grab the mesh
    //     let mesh = this.el.getObject3D("#bear");
    //     mesh.traverse(node => {
    //         // ignore nodes without materials
    //         if (!node.material) return;
    //         // assign the values.
    //         node.material.metalness = 1;
    //         node.material.roughness = 0;
    //     })
    //     })
    // }
    // })
})