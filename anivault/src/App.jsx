import { useState } from "react";
import "./App.css";

import AnimeGrid from "./components/anime/AnimeGrid";
import BlockedPanel from "./components/anime/BlockedPanel";
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
  const [blocked, setBlocked] = useLocalStorage("anivault_blocked", []);

  const toggleFavorite = (anime) => {
    const isFav = favorites.some((fav) => fav.mal_id === anime.mal_id);

    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.mal_id !== anime.mal_id));
      return;
    }

    if (!blocked.some((item) => item.mal_id === anime.mal_id)) {
      setFavorites([...favorites, anime]);
    }
  };

  const toggleBlocked = (anime) => {
    const isBlocked = blocked.some((item) => item.mal_id === anime.mal_id);

    if (isBlocked) {
      setBlocked(blocked.filter((item) => item.mal_id !== anime.mal_id));
      return;
    }

    setBlocked([...blocked, anime]);
    setFavorites(favorites.filter((item) => item.mal_id !== anime.mal_id));
  };

  const isFavorite = (animeId) => favorites.some((fav) => fav.mal_id === animeId);
  const isBlocked = (animeId) => blocked.some((item) => item.mal_id === animeId);

  const filteredAnime = animeList
    .filter((anime) => !isBlocked(anime.mal_id))
    .filter((anime) =>
      anime.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

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
              onToggleBlocked={toggleBlocked}
              isFavorite={isFavorite}
              isBlocked={isBlocked}
            />
          )}

          {!loading && !error && filteredAnime.length === 0 && (
            <p className="empty-message">
              No se encontraron animes para "{searchTerm}".
            </p>
          )}
        </main>
        <aside className="sidebar-panels">
          <FavoritesPanel
            favorites={favorites}
            onRemoveFavorite={toggleFavorite}
          />
          <BlockedPanel
            blocked={blocked}
            onRemoveBlocked={toggleBlocked}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
