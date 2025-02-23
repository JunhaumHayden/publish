const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

        const getCats = async () => {
            try {
                const data = await fetch(BASE_URL);
                const json = await data.json();
                return json[0].url;
            } catch (e) {
                console.log(e.message);
            }
        };

        const loadImg = async () => {
			const img = document.getElementById('cat');
			img.classList.add('loading');
			img.src = await getCats();
			img.onload = () => img.classList.remove('loading');
		};

        loadImg();

        const btn = document.getElementById('change-cat');
        btn.addEventListener('click', loadImg);

		