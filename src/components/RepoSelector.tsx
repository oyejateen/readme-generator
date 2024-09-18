import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

interface Repo {
  id: number;
  full_name: string;
  description: string;
}

interface RepoSelectorProps {
  repos: Repo[];
  onSelect: (repo: string) => void;
}

const RepoSelector: React.FC<RepoSelectorProps> = ({ repos, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRepo, setSelectedRepo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 15;

  const filteredRepos = repos.filter(repo =>
    repo.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleRepoSelect = (repo: string) => {
    setSelectedRepo(repo);
    onSelect(repo);
  };

  useEffect(() => {
    console.log('Repos received:', repos);
  }, [repos]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Select a Repository</h2>
      <div className="flex space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search repositories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-8 bg-gray-800 border border-gray-700 rounded-md text-white"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
        </div>
        <button className="bg-gray-700 p-2 rounded-md">
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentRepos.map((repo) => (
          <div
            key={repo.id}
            className={`p-4 border rounded-md cursor-pointer ${
              selectedRepo === repo.full_name ? 'border-green-300 bg-gray-800' : 'border-gray-700'
            }`}
            onClick={() => handleRepoSelect(repo.full_name)}
          >
            <h3 className="font-semibold">{repo.full_name}</h3>
            <p className="text-sm text-gray-400 truncate">{repo.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(filteredRepos.length / reposPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-green-300 text-gray-900' : 'bg-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RepoSelector;