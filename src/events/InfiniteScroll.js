import { ImageGallery } from '../components/ImageGallery.js';
import { ImagePopup } from '../components/ImagePopup.js';

const apiKey = import.meta.env.VITE_FLICKR_API_KEY;
const userId = '191860836@N02';

document.addEventListener('DOMContentLoaded', () => {
	const gallery = new ImageGallery(apiKey, userId);
	const popup = new ImagePopup();

	const galleryElement = document.getElementById('gallery');
	galleryElement.addEventListener('click', (e) => {
		if (e.target.tagName === 'IMG') {
			popup.openPopup(e.target.src);
		}
	});
});
