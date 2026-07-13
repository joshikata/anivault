const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message" role="alert">
      <strong>No se pudo cargar la información.</strong>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
