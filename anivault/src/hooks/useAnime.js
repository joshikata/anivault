import { useEffect, useState } from "react";
import { getTopAnime } from "../services/animeApi";

export function useAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAnime() {
      try {
        setLoading(true);
        setError("");

        const animeData = await getTopAnime();
        setAnimeList(animeData);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setLoading(false);
      }
    }

    loadAnime();
  }, []);

  return {
    animeList,
    loading,
    error,
  };
}