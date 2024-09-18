import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="text-xl">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <Link to="/" className="text-xl font-bold">README Genie</Link>
        <a href="https://buymeacoffee.com/heyjateen" target="_blank" rel="noopener noreferrer" className="bg-green-300 text-gray-900 px-4 py-2 rounded-full hover:bg-green-400 transition duration-300 flex items-center">
          <FontAwesomeIcon icon={faCoffee} className="mr-2" />
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;