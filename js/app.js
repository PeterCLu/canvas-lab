/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/
var erase = false;

function eraser() {
    erase = !erase;
};


document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var color = document.getElementById('line-color-inp').value;
    var width;




    var mouseDown = false;

    document.addEventListener('mousedown', function(evt) {
        mouseDown = true;
        ctx.beginPath()
        width = document.getElementById('line-width-inp').value;
    });

    document.addEventListener('mouseup', function(evt) {
        mouseDown = false;
    });

    document.addEventListener('mousemove', function(evt) {
        if (mouseDown) {
            ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);

            ctx.lineWidth = width;
            console.log(width);

            console.log(erase);

            if(erase) {
                ctx.clearRect(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop, width, width);
            } else {
                ctx.stroke();
            }

        }

    });

    document.addEventListener('change', function(evt) {
        var color = document.getElementById('line-color-inp').value
        ctx.strokeStyle = color;
        console.log(color);
    });

}); //DOMContentLoaded
