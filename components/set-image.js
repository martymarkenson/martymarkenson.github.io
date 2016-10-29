/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    camera: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300},
    rotation: {type: 'number', default: 0},
  },

  init: function () {
      var data = this.data;
      var el = this.el;
      this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
        var cameraY = data.camera.getAttribute('rotation').y;
      // Fade out image.
        data.target.emit('set-image-fade');
      // Wait for fade to complete.
        setTimeout(function () {
        // Set image.
            data.target.setAttribute('material', 'src', data.src);
            data.camera.setAttribute('rotation', {
                x:0,
                y:(data.rotation),
                z:0});
        }, data.dur);
    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});
