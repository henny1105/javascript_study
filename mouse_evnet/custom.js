document.addEventListener("mousemove", function (event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var container = document.querySelector(".container");
    var radialGradient = document.querySelector(".radial-gradient");
    var gradientSize = radialGradient.offsetWidth; // Assuming the radial gradient is a square, so width and height are the same

    var newX = mouseX - gradientSize / 2;
    var newY = mouseY - gradientSize / 2;

    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    if (newX < 0) {
        newX = 0;
    } else if (newX + gradientSize > containerWidth) {
        newX = containerWidth - gradientSize;
    }

    if (newY < 0) {
        newY = 0;
    } else if (newY + gradientSize > containerHeight) {
        newY = containerHeight - gradientSize;
    }

    radialGradient.style.left = newX + "px";
    radialGradient.style.top = newY + "px";
});
