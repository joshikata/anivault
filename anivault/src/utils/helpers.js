export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const formatScore = (score) => {
  if (!score) return 'N/A';
  return score.toFixed(1);
};

export const isInList = (list, id) => list.some((item) => item.mal_id === id);
