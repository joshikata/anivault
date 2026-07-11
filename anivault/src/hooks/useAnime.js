import { useState, useEffect } from 'react';
import { searchAnime, getTopAnime } from '../services/animeApi';

const useAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTop = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTopAnime();
      setAnimes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const search = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchAnime(query);
      setAnimes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTop();
  }, []);

  return { animes, loading, error, search };
};

export default useAnime;
