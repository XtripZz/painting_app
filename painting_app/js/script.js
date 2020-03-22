let canvas = document.querySelector('#c1');
let ctx = canvas.getContext('2d');

// Change bg color
let bgColor = document.querySelector('#cvs-bg-color');
bgColor.oninput = () => {
    canvas.style.background = bgColor.value;
}

// Drawing work
canvas.onmousedown = function () {
    ctx.beginPath();

    // Change pen color
    let penColor = document.querySelector('#cvs-pen-color').value;
    ctx.strokeStyle = penColor;

    // Change line width
    let penWidth = document.querySelector('#cvs-line-width').value;
    ctx.lineWidth = penWidth;

    canvas.onmousemove = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
    }

    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}

// Clear canvas
document.querySelector('.clear').onclick = () => {
    ctx.clearRect(0, 0, 1658, 800);
}