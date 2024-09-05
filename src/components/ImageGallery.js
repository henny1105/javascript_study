export class ImageGallery {
	constructor(apiKey, userId) {
		this.apiKey = apiKey;
		this.userId = userId;
		this.page = 1;
		this.totalPages = null;
		this.gallery = document.getElementById('gallery');
		this.endMarker = document.getElementById('end_marker');
		this.loadingSpinner = document.getElementById('loading_spinner');
		this.init();
	}

	async loadImages() {
		try {
			this.toggleLoadingSpinner(true);
			const response = await fetch(
				`https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${this.apiKey}&user_id=${this.userId}&per_page=20&page=${this.page}&format=json&nojsoncallback=1`
			);
			const data = await response.json();
			console.log(data);
			this.totalPages = data.photos.pages;
			return data.photos.photo;
		} catch (error) {
			console.error('이미지를 불러오는 중 오류 발생:', error);
			return [];
		} finally {
			this.toggleLoadingSpinner(false);
		}
	}

	displayImages(images) {
		images.forEach((photo) => {
			const img = document.createElement('img');
			const imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
			img.src = imgUrl;
			this.gallery.appendChild(img);
		});
	}

	toggleLoadingSpinner(isVisible) {
		if (isVisible) {
			this.loadingSpinner.classList.remove('hidden');
		} else {
			this.loadingSpinner.classList.add('hidden');
		}
	}

	initObserver() {
		const observer = new IntersectionObserver(
			async (entries) => {
				if (entries[0].isIntersecting && (this.totalPages === null || this.page <= this.totalPages)) {
					const images = await this.loadImages();
					this.displayImages(images);
					this.page++;
				}
			},
			{
				root: null,
				threshold: 0.5,
			}
		);
		observer.observe(this.endMarker);
	}

	init() {
		this.initObserver();
	}
}
