import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'text-black border-b-2 border-black pb-1 text-sm font-medium'
    : 'text-gray-400 text-sm hover:text-black transition-colors duration-200';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <NavLink to="/" className="text-xl font-bold tracking-tight" aria-label="Accueil">
        Rayane 🇲🇦
      </NavLink>
      <nav aria-label="Navigation principale">
        <ul className="flex gap-10 list-none m-0 p-0">
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
