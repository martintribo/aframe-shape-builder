AFRAME.registerComponent('builder-container', {
    init: function () {
        this.el.childNodes.forEach(node => {
            if (node instanceof HTMLElement) {
                node.setAttribute('builder-node', '');
            }
        });
    }
  });