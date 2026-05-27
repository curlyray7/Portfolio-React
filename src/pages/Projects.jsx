import { useState, useEffect } from 'react';

const allProjects = [
  {
    id: 1,
    title: 'Portfolio Web',
    category: 'React',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    year: '2026',
    image: null,
  },
  {
    id: 2,
    title: 'Stream Overlay',
    category: 'Design',
    description:
      'What was your role, your deliverables, if the project was personal, freelancing.',
    year: '2025',
    image: null,
  },
  {
    id: 3,
    title: 'Bot Discord',
    category: 'Node.js',
    description:
      'You can also add in this description the type of the project, if it was for web, mobile, electron.',
    year: '2025',
    image: null,
  },
];

const categories = ['All', ...new Set(allProjects.map((p) => p.category))];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setProjects(allProjects);
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="px-8 py-16 max-w-3xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <div className="w-8 h-0.5 bg-primary mx-auto" />
      </div>

      {/* Category filters */}
      <div className="flex gap-3 mb-10 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              filter === cat
                ? 'bg-primary text-black'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project cards — alternating layout */}
      {loading ? (
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-gray-100 h-56 animate-pulse bg-gray-50" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } rounded-2xl overflow-hidden shadow-sm border border-gray-100 min-h-[220px]`}
            >
              {/* Image placeholder */}
              <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center min-h-[180px]">
                <span className="text-gray-300 text-sm">Project image</span>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold bg-primary/20 text-black px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <button className="self-start mt-2 text-xs font-semibold px-4 py-2 border border-gray-800 rounded hover:bg-black hover:text-white transition-colors duration-200">
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
