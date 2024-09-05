const swiper = new Swiper('.snbSwiper', {
	slidesPerView: 'auto',
	preventClicks: true,
	preventClicksPropagation: false,
	observer: true,
	observeParents: true,
});

const $snbSwiperItem = document.querySelectorAll('.snbSwiper .swiper-wrapper .swiper-slide a');

$snbSwiperItem.forEach(function (item) {
	item.addEventListener('click', function () {
		let target = this.parentNode;

		$snbSwiperItem.forEach(function (item) {
			item.parentNode.classList.remove('on');
		});

		target.classList.add('on');
		muCenter(target);
	});
});

function muCenter(target) {
	const snbWrap = document.querySelector('.snbSwiper .swiper-wrapper');
	const targetRect = target.getBoundingClientRect();
	const box = document.querySelector('.snbSwiper');
	const boxHalf = box.clientWidth / 2;
	let pos;
	let listWidth = 0;

	document.querySelectorAll('.snbSwiper .swiper-wrapper .swiper-slide').forEach(function (slide) {
		listWidth += slide.offsetWidth;
	});

	const selectTargetPos = targetRect.left - snbWrap.getBoundingClientRect().left + target.offsetWidth / 2;

	if (selectTargetPos <= boxHalf) {
		// left
		pos = 0;
	} else if (listWidth - selectTargetPos <= boxHalf) {
		// right
		pos = listWidth - box.clientWidth;
	} else {
		pos = selectTargetPos - boxHalf;
	}

	// 애니메이션 적용
	setTimeout(function () {
		snbWrap.style.transform = 'translateX(' + pos * -1 + 'px)';
		snbWrap.style.transitionDuration = '500ms';
	}, 200);
}
