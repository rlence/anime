const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			topAnime: [],
			anime: {}
		},
		actions: {
			setTopAnime: (topAnimeList) => {
				setStore({topAnime: topAnimeList });
			},
			setAnime : (anime) => {
				setStore({anime: anime});
			}	
		}
	};
};

export default getState;
