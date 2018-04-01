import TransformControls from '../ext/transformcontrols.mjs';

AFRAME.registerComponent('transform-controls', {
    schema: {
        mode: { type: 'string', default: 'translate'}
    },
    init: function () {
        this.sceneEl = AFRAME.scenes[0];
        this.cameraChangeListener = () => {
            this.createControl();
        };
        this.sceneEl.addEventListener('camera-set-active', this.cameraChangeListener);
    },
    update: function () {
        this.createControl();
    },
    remove: function () {
        this.sceneEl.removeEventListener('camera-set-active', this.cameraChangeListener);
        if (this.transformControl) {
            this.disposeControl();
        }
        this.sceneEl = null;
    },
    tick: function () {
        if (this.transformControl) {
            this.transformControl.update();
        }
    },

    createControl: function () {
        if (this.transformontrol) {
            this.disposeControl();
        }
        if (this.sceneEl.camera != null) {
            this.transformControl = new TransformControls(this.sceneEl.camera, document.querySelector('.a-canvas'));
            this.transformControl.attach(this.el.object3D);
            this.transformControl.setMode(this.data.mode);
            this.sceneEl.object3D.add(this.transformControl);
        }
    },
    disposeControl: function () {
        this.transformControl.dispose();
        this.sceneEl.object3D.remove(this.transformControl);
        this.transformControl = null;
    }
  });