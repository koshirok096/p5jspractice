let colorInput, weight, clear;
const paths = [];
let currentPath = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);

    colorInput = document.getElementById('color');
    weight = document.getElementById('weight');
    clear = document.getElementById('clear');
}

function draw() {
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

function mousePressed() {
    currentPath = [];
    paths.push(currentPath);
}

document.addEventListener('DOMContentLoaded', function () {
    setup();
});

clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});