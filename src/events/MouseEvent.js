document.addEventListener('mousemove', function (event) {
	const mouseX = event.pageX;
	const mouseY = event.pageY;
	const container = document.querySelector('.container');
	const radialGradient = document.querySelector('.radial-gradient');
	const gradientSize = radialGradient.offsetWidth;

	const newX = mouseX - gradientSize / 2;
	const newY = mouseY - gradientSize / 2;

	const containerWidth = container.offsetWidth;
	const containerHeight = container.offsetHeight;

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

	radialGradient.style.left = newX + 'px';
	radialGradient.style.top = newY + 'px';
});
