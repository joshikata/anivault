import { useState } from "react";
import "./App.css";

import AnimeGrid from "./components/anime/AnimeGrid";
import BlockedPanel from "./components/anime/BlockedPanel";
import SearchBar from "./components/anime/SearchBar";
import Stats from "./components/anime/Stats";
import ErrorMessage from "./components/common/ErrorMessage";
import Loading from "./components/common/Loading";
import FavoritesPanel from "./components/anime/FavoritesPanel";
import TeamSection from "./components/layout/TeamSection";
import { useAnime } from "./hooks/useAnime";
import useAnimeCollections from "./hooks/useAnimeCollections";

function App() {
  const { animeList, loading, error } = useAnime();
  const [searchTerm, setSearchTerm] = useState("");
  const {
    favorites,
    blocked,
    favoriteCount,
    blockedCount,
    isFavorite,
    isBlocked,
    toggleFavorite,
    toggleBlocked,
  } = useAnimeCollections();

  const filteredAnime = animeList
    .filter((anime) => !isBlocked(anime.mal_id))
    .filter((anime) =>
      anime.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

  const totalItems = animeList.length;

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

          <Stats
            total={totalItems}
            favorites={favoriteCount}
            blocked={blockedCount}
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

      <TeamSection members={["Fernanda De La Mora"]} />
    </div>
  );
}

export default App;
