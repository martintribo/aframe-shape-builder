AFRAME.registerComponent('absolute-scale', {
    schema: {
        type: 'vec3',
        default: { x: 1, y: 1, z: 1 }
    },
    init: function () {
        this.el.childNodes.forEach(node => {
            if (node instanceof HTMLElement) {
                node.setAttribute('builder-node', '');
            }
        });
    },
    tick: function () {
        var parent = this.el.parentNode;
        var parentScale = new THREE.Vector3();
        parentScale.setFromMatrixScale(parent.object3D.matrixWorld);

        this.el.object3D.scale.set(
            this.data.x / parentScale.x,
            this.data.y / parentScale.y,
            this.data.z / parentScale.z
        );
    }
  });