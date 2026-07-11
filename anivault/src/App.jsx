import "./App.css";

function App() {
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
        <section className="placeholder">
          <h2>Tu bóveda de anime está lista ✨</h2>
          <p>En el siguiente paso cargaremos los datos desde Jikan API.</p>
        </section>
      </main>

      <footer className="footer">
        <p>Desarrollado por Fernanda</p>
      </footer>
    </div>
  );
}

export default App;