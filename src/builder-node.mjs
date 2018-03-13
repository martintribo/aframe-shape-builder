AFRAME.registerComponent('builder-node', {
    init: function () {
        this.el.addEventListener('mouseenter', () => {
            this.el.setAttribute('color', 'red');
        });
        var grid = document.createElement('a-entity');
        grid.setAttribute('gridhelper', '');
        this.el.appendChild(grid);
    }
  });