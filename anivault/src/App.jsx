import { useState } from "react";
import "./App.css";

import AnimeGrid from "./components/anime/AnimeGrid";
import SearchBar from "./components/anime/SearchBar";
import ErrorMessage from "./components/common/ErrorMessage";
import Loading from "./components/common/Loading";
import { useAnime } from "./hooks/useAnime";

function App() {
  const { animeList, loading, error } = useAnime();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAnime = animeList.filter((anime) =>
    anime.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
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
          <AnimeGrid animeList={filteredAnime} />
        )}

        {!loading && !error && filteredAnime.length === 0 && (
          <p className="empty-message">
            No se encontraron animes para “{searchTerm}”.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;