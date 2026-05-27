import { useNavigate } from 'react-router-dom';

const HeroButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 mt-4">
      <button
        onClick={() => navigate('/projects')}
        className="bg-primary text-black font-semibold text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
      >
        Projects
      </button>
      <a
        href="https://www.linkedin.com/in/rayane-elyounsi/"
        target="_blank"
        rel="noreferrer"
        className="bg-transparent text-black font-semibold text-sm px-5 py-2.5 rounded-md border border-gray-400 hover:border-black transition-colors"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default HeroButtons;
