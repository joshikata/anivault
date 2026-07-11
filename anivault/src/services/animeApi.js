const BASE_URL = 'https://api.jikan.moe/v4';

export const getTopAnime = async () => {
  const res = await fetch(`${BASE_URL}/top/anime`);
  if (!res.ok) throw new Error('Error al obtener el top de animes');
  const { data } = await res.json();
  return data;
};

export const searchAnime = async (query) => {
  const res = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=20`);
  if (!res.ok) throw new Error('Error al buscar anime');
  const { data } = await res.json();
  return data;
};
