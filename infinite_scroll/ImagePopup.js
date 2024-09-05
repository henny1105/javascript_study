export class ImagePopup {
	constructor() {
		this.popup = document.getElementById('image_popup');
		this.popupImg = document.getElementById('popup_img');
		this.closePopup = document.getElementById('close_popup');
		this.init();
	}

	openPopup(src) {
		this.popup.classList.add('active');
		this.popupImg.src = src.replace('_c.jpg', '_b.jpg');
	}

	closePopupWindow() {
		this.popup.classList.remove('active');
	}

	init() {
		this.closePopup.addEventListener('click', () => this.closePopupWindow());

		this.popup.addEventListener('click', (e) => {
			if (e.target === this.popup) {
				this.closePopupWindow();
			}
		});
	}
}
