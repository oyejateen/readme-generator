import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { faCoffee, faCode, faMagicWandSparkles, faLightbulb, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Perfect', 'Beautiful', 'Interactive', 'Professional', 'Inspirational', 'Motivational', 'Creative', 'Innovative', 'Dynamic', 'Elegant'];

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-green-300 text-2xl font-bold">README Genie</Link>
          <a href="https://buymeacoffee.com/heyjateen" target="_blank" rel="noopener noreferrer" className="bg-green-300 text-gray-900 px-4 py-2 rounded-full hover:bg-green-400 transition duration-300 flex items-center">
            <FontAwesomeIcon icon={faCoffee} className="mr-2" />
            Buy me a coffee
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Create <span className="text-green-300">{words[currentWord]}</span> README
            </h1>
            <p className="text-xl mb-8">Generate beautiful and informative README files for your GitHub projects with ease.</p>
            <Link to="/auth" className="bg-green-300 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300 inline-flex items-center">
              Get Started
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="/hpill.svg" alt="README Generator" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">We've Got Everything You Need</h2>
          <p className="text-xl text-center mb-12">Our README generator comes packed with features to make your life easier.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faGithub, title: 'GitHub Integration', description: 'Seamlessly connect with your GitHub repositories' },
              { icon: faMagicWandSparkles, title: 'AI-Powered', description: 'Generate comprehensive READMEs with AI assistance' },
              { icon: faCode, title: 'Syntax Highlighting', description: 'Beautiful code snippets in your README' },
              { icon: faLightbulb, title: 'Custom Templates', description: 'Choose from various README templates or create your own' },
              { icon: faRocket, title: 'Quick Deploy', description: 'Push your README directly to your repository' },
              { icon: faUsers, title: 'Collaboration', description: 'Work together with your team on README files' },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <FontAwesomeIcon icon={feature.icon} className="text-green-300 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <FontAwesomeIcon icon={faGithub} className="text-green-300 text-[150px] lg:text-[200px]" />
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-4xl font-bold mb-4">We're Open Source</h2>
            <p className="text-xl mb-6">
              Join our thriving community of developers and contributors. Our README generator is built on the principles of open-source collaboration, fostering innovation and continuous improvement.
            </p>
            <p className="text-xl mb-8">
              By contributing to this project, you're not just improving a tool; you're enhancing the way developers worldwide communicate their projects. Whether you're fixing bugs, adding features, or improving documentation, your contributions make a difference.
            </p>
            <a href="https://github.com/oyejateen/readme-generator" target="_blank" rel="noopener noreferrer" className="bg-green-300 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300 inline-flex items-center">
              View on GitHub
              <FontAwesomeIcon icon={faArrowUp} className="ml-2 transform rotate-45" />
            </a>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Contributors</h2>
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { name: 'Jateen', role: 'Lead Developer', image: 'https://avatars.githubusercontent.com/u/75193966?v=4' },
            ].map((contributor, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={contributor.image} alt={contributor.name} className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">{contributor.name}</h3>
                <p className="text-green-300">{contributor.role}</p>
              </div>
            ))}
          </div>
          <p className="text-xl">waiting for amazing contributors!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/oyejateen" className="text-green-300 hover:text-green-400 text-2xl"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://x.com/oyejateen" className="text-green-300 hover:text-green-400 text-2xl"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://instagram.com/heyjateen" className="text-green-300 hover:text-green-400 text-2xl"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com/in/oyejateen" className="text-green-300 hover:text-green-400 text-2xl"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <p>
            Crafted by <span className="text-green-300 font-semibold">heyjateen</span> & <span className="text-green-300 font-semibold">Typescript</span>
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrollPosition > 300 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-300 text-gray-900 p-3 rounded-full hover:bg-green-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default Home;