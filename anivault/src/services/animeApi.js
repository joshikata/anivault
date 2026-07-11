const API_BASE_URL = "https://api.jikan.moe/v4";

export async function getTopAnime() {
  const response = await fetch(`${API_BASE_URL}/top/anime?limit=20`);

  if (!response.ok) {
    throw new Error("No se pudieron cargar los animes.");
  }

  const result = await response.json();

  return result.data;
}