const skills = [
  'React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3',
  'Node.js', 'Figma', 'Git', 'REST API', 'Responsive Design',
];

const About = () => {
  return (
    <section className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-3">About</h1>
      <p className="text-gray-400 mb-14 text-sm">Mon parcours et mes compétences</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-5">Qui suis-je ?</h2>
          <p className="text-gray-500 leading-relaxed mb-5">
            Développeur web passionné, je crée des expériences digitales uniques
            mêlant code et créativité. Mon objectif est de construire des interfaces élégantes et
            performantes.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Étudiant en Ingé1 à l'EFREI, je maîtrise l'écosystème React et les meilleures
            pratiques de développement front-end moderne.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {[
              { label: 'Localisation', value: 'Bordeaux, France' },
              { label: 'Formation', value: 'Ingé 1 – EFREI' },
              { label: 'Disponibilité', value: 'Stage / Alternance' },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3">
                <span className="text-sm font-semibold text-gray-400 w-28 flex-shrink-0">{label}</span>
                <span className="text-sm text-black">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-5">Compétences</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary hover:text-black transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold mb-5">Expérience</h3>
            <div className="flex flex-col gap-6">
              {[
                { year: '2026', role: 'Développeur Front-End', company: 'EFREI – Projet Portfolio' },
                { year: '2025', role: 'Streamer Twitch', company: 'Indépendant' },
                { year: '2024', role: 'Développeur Web Junior', company: 'Stage entreprise' },
              ].map(({ year, role, company }) => (
                <div key={year} className="flex gap-4 items-start">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md flex-shrink-0 mt-0.5">
                    {year}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{role}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
