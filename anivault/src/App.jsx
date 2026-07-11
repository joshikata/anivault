import "./App.css";
import AnimeGrid from "./components/anime/AnimeGrid";
import ErrorMessage from "./components/common/ErrorMessage";
import Loading from "./components/common/Loading";
import { useAnime } from "./hooks/useAnime";

function App() {
  const { animeList, loading, error } = useAnime();

  return (
    <div className="app">
      <header className="hero">
        <p className="hero__eyebrow">Anime discovery app</p>
        <h1>AniVault</h1>
        <p>Explora anime y organiza tus títulos favoritos.</p>
      </header>

      <main className="main-content">
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && <AnimeGrid animeList={animeList} />}
      </main>
    </div>
  );
}

export default App;