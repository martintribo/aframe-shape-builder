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
        this.el.appendChild(this.grid);
        this.isActive = false;
    },
    remove: function () {
        this.system.register(this);
        this.el.removeChild(this.grid);
    },
    adjustScale: function (x, y, z) {

    },
    onActive: function () {
        this.isActive = true;
        this.grid.setAttribute('gridhelper', '');
    },
    onInactive: function () {
        this.isActive = false;
        this.grid.removeAttribute('gridhelper');
    }
});

AFRAME.registerSystem('builder-node', {
    'init': function () {
        this.components = [];

        window.addEventListener('keydown', function () {
            if (this.activeComponent != null) {
                this.activeComponent.adjustScale();
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