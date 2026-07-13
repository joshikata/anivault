function Loading() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <span className="loading__spinner" aria-hidden="true"></span>
      <p>Cargando animes, por favor espera...</p>
    </div>
  );
}

export default Loading;