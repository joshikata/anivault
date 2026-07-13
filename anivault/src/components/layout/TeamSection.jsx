const TeamSection = ({ members }) => {
  return (
    <section className="team-section" aria-labelledby="team-title">
      <p className="team-section__eyebrow">Integrante del proyecto</p>
      <h2 id="team-title">Equipo</h2>
      <ul className="team-section__list">
        {members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
      <p>
        Desarrollo de interfaz, organización de componentes y persistencia de favoritos y bloqueados.
      </p>
    </section>
  );
};

export default TeamSection;