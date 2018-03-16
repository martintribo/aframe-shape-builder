// TODO: Investigate using AFRAME.registerInputMappings
AFRAME.registerComponent('builder-node', {
    init: function () {
        this.system.register(this);
        this.el.addEventListener('click', () => {
            if (!this.isActive) {
                this.system.setActiveComponent(this);
            } else {
                this.system.setActiveComponent(null);
            }
        });
        this.grid = document.createElement('a-entity');
        this.grid.setAttribute('absolute-scale', '1 1 1');
        this.el.appendChild(this.grid);
        this.isActive = false;
    },
    remove: function () {
        this.system.register(this);
        this.el.removeChild(this.grid);
    },
    adjustScale: function (x, y, z) {
        x = x || 0;
        y = y || 0;
        z = z || 0;
        var scale = this.el.getAttribute('scale');
        this.el.setAttribute('scale', {
            'x': scale.x + x,
            'y': scale.y + y,
            'z': scale.z + z
        });
    },
    onActive: function () {
        this.isActive = true;
        this.grid.setAttribute('gridhelper', '');
        this.grid.setAttribute('axis-helper', '');
    },
    onInactive: function () {
        this.isActive = false;
        this.grid.removeAttribute('gridhelper');
        this.grid.removeAttribute('axis-helper');
    }
});

AFRAME.registerSystem('builder-node', {
    'init': function () {
        this.components = [];

        window.addEventListener('keydown', e => {
            if (this.activeComponent != null) {
                var x = 0;
                var y = 0;
                var z = 0;
                if (e.keyCode === 73) {
                    z++;
                } else if (e.keyCode === 75) {
                    z--;
                } else if (e.keyCode === 74) {
                    x--;
                } else if (e.keyCode === 76) {
                    x++;
                }
                console.log(e.keyCode);
                this.activeComponent.adjustScale(x, y, z);
            }
        });
    },

    register: function (component) {
        this.components.push(component);
    },
    unregister: function (component) {
        this.components.splice(this.components.indexOf(component), 1);
    },
    setActiveComponent: function (component) {
        if (this.activeComponent != null) {
            this.activeComponent.onInactive();
        }
        this.activeComponent = component;
        if (component != null) {
            component.onActive();
        }
    }
});