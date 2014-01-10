// Create a draw component
var drawComponent = Ext.create('Ext.draw.Component', {
    viewBox: false
});

// Create a window to place the draw component in
Ext.create('Ext.Window', {
    width: 500,
    height: 250,
    layout: 'fit',
    items: [drawComponent]
}).show();

// Add a circle sprite
var Circle = drawComponent.surface.add({
    type: 'circle',
    x: 80,
    y: 200,
    radius: 20,
    fill: '#eee'
});

var Circle1 = drawComponent.surface.add({
    type: 'circle',
    x: 120,
    y: 200,
    radius: 20,
    fill: '#eee'
});
var Circle2 = drawComponent.surface.add({
    type: 'circle',
    x: 160,
    y: 200,
    radius: 20,
    fill: '#eee'
});
var Circle3 = drawComponent.surface.add({
    type: 'circle',
    x: 200,
    y: 200,
    radius: 20,
    fill: '#eee'
});
var Circle4 = drawComponent.surface.add({
    type: 'circle',
    x: 240,
    y: 200,
    radius: 20,
    fill: '#eee'
});
var Circle5 = drawComponent.surface.add({
    type: 'circle',
    x: 280,
    y: 200,
    radius: 20,
    fill: '#eee'
});
var Circle6 = drawComponent.surface.add({
type : "path",
            path : "M 438.39286,164.92857 400.35714,151 l -51.25,35.89286 40.17858,14.46428 49.10714,-36.42857 z",
            fill : '#FF02D9',
            'fill-opacity' : "1",
            'opacity' : "0.6585366",
            'fill-rule' : 'nonzero',
            group : 'convc',
            stroke : 'none'
});
var Circle6 = drawComponent.surface.add({
type : "path",
            path : "M 438,114 400,101 l -51,-15 40,-36 49,-36 z",
            fill : '#FF02D9',
            'fill-opacity' : "1",
            'opacity' : "0.6585366",
            'fill-rule' : 'nonzero',
            group : 'convc',
            stroke : 'none'
});
var Circle6 = drawComponent.surface.add({
type : "path",
            path : "M 100 50 L 125 150 L 100 150 200 Z",
            fill : '#FF02D9',
            'fill-opacity' : "1",
            'opacity' : "0.6585366",
            'fill-rule' : 'nonzero',
            group : 'convc',
            stroke : 'none'
});

// Now do stuff with the sprite, like changing its properties:
Circle.setAttributes({
    fill: '#ccc'
}, true);
Circle1.setAttributes({
    fill: '#ccc'
}, true);
Circle2.setAttributes({
    fill: '#ccc'
}, true);
Circle3.setAttributes({
    fill: '#ccc'
}, true);
Circle4.setAttributes({
    fill: '#ccc'
}, true);
Circle5.setAttributes({
    fill: '#ccc'
}, true);
Circle6.setAttributes({
    scale: {
        x:0.3,
        y:0.3
    },
    fill: '#ccc'
}, true);


// or animate an attribute on the sprite
Circle.animate({
    to: {
        fill: '#eee'
    },
    duration: 2000
});

// Add a mouseup listener to the sprite
Circle.addListener('mouseup', function() {
    alert('Ouch');
});