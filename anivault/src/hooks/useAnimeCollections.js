import useLocalStorage from "./useLocalStorage";

function useAnimeCollections() {
  const [favorites, setFavorites] = useLocalStorage("anivault_favorites", []);
  const [blocked, setBlocked] = useLocalStorage("anivault_blocked", []);

  const isFavorite = (animeId) =>
    favorites.some((favorite) => favorite.mal_id === animeId);

  const isBlocked = (animeId) =>
    blocked.some((item) => item.mal_id === animeId);

  const toggleFavorite = (anime) => {
    const alreadyFavorite = isFavorite(anime.mal_id);

    if (alreadyFavorite) {
      setFavorites((currentFavorites) =>
        currentFavorites.filter((favorite) => favorite.mal_id !== anime.mal_id)
      );
      return;
    }

    if (!isBlocked(anime.mal_id)) {
      setFavorites((currentFavorites) => [...currentFavorites, anime]);
    }
  };

  const toggleBlocked = (anime) => {
    const alreadyBlocked = isBlocked(anime.mal_id);

    if (alreadyBlocked) {
      setBlocked((currentBlocked) =>
        currentBlocked.filter((item) => item.mal_id !== anime.mal_id)
      );
      return;
    }

    setBlocked((currentBlocked) => [...currentBlocked, anime]);
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite.mal_id !== anime.mal_id)
    );
  };

  return {
    favorites,
    blocked,
    favoriteCount: favorites.length,
    blockedCount: blocked.length,
    isFavorite,
    isBlocked,
    toggleFavorite,
    toggleBlocked,
  };
}

export default useAnimeCollections;