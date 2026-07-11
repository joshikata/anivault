const EmptyState = ({ message = 'No hay resultados.' }) => {
  return <div className="empty-state">{message}</div>;
};

export default EmptyState;
