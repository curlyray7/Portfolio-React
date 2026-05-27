import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-10">
      <div className="flex flex-col items-center gap-4 pb-8 relative z-10">
        <ul className="flex gap-6 list-none m-0 p-0" aria-label="Réseaux sociaux">
          <li>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-black transition-colors duration-200">
              <FaInstagram size={22} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-500 hover:text-black transition-colors duration-200">
              <FaLinkedin size={22} />
            </a>
          </li>
          <li>
            <a href="mailto:rayane@efrei.fr" aria-label="Email" className="text-gray-500 hover:text-black transition-colors duration-200">
              <FaEnvelope size={22} />
            </a>
          </li>
        </ul>
        <p className="text-gray-400 text-sm">Rayane 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
