import { useState } from "react";
import "./App.css";

import AnimeGrid from "./components/anime/AnimeGrid";
import SearchBar from "./components/anime/SearchBar";
import ErrorMessage from "./components/common/ErrorMessage";
import Loading from "./components/common/Loading";
import FavoritesPanel from "./components/anime/FavoritesPanel";
import { useAnime } from "./hooks/useAnime";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { animeList, loading, error } = useAnime();
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useLocalStorage("anivault_favorites", []);

  const filteredAnime = animeList.filter((anime) =>
    anime.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  const toggleFavorite = (anime) => {
    const isFav = favorites.some((fav) => fav.mal_id === anime.mal_id);
    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.mal_id !== anime.mal_id));
    } else {
      setFavorites([...favorites, anime]);
    }
  };

  const isFavorite = (animeId) => {
    return favorites.some((fav) => fav.mal_id === animeId);
  };

  return (
    <div className="app">
      <header className="hero">
        <p className="hero__eyebrow">Anime discovery app</p>
        <h1>AniVault</h1>
        <p className="hero__description">
          Explora anime, guarda tus favoritos y bloquea los títulos que no
          quieras volver a ver.
        </p>
      </header>

      <div className="main-wrapper">
        <main className="main-content">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {loading && <Loading />}

          {!loading && error && (
            <ErrorMessage message={error} />
          )}

          {!loading && !error && filteredAnime.length > 0 && (
            <AnimeGrid 
              animeList={filteredAnime}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          )}

          {!loading && !error && filteredAnime.length === 0 && (
            <p className="empty-message">
              No se encontraron animes para "{searchTerm}".
            </p>
          )}
        </main>
        <FavoritesPanel 
          favorites={favorites}
          onRemoveFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default App;
