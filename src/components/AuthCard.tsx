import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { authenticateWithGitHub } from '../services/github';

const AuthCard = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <img src="/auth.png" alt="Authentication" className="w-full h-auto max-h-48 md:max-h-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Let's get you logged in</h2>
          <button
            onClick={authenticateWithGitHub}
            className="text-white text-lg font-semibold hover:text-green-300 transition duration-300 flex items-center justify-center md:justify-start underline"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;