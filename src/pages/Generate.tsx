import { useState, useEffect } from 'react';
import { getUserRepos } from '../services/github';
import Navbar from '../components/Navbar';
import RepoSelector from '../components/RepoSelector';
import ReadmeGenerator from '../components/ReadmeGenerator';
import ReadmeViewer from '../components/ReadmeViewer';

interface Repo {
  id: number;
  full_name: string;
  description: string;
}

const Generate = () => {
  const [step, setStep] = useState(1);
  const [selectedRepo, setSelectedRepo] = useState('');
  const [generatedReadme, setGeneratedReadme] = useState('');
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleRepoSelect = (repo: string) => {
    setSelectedRepo(repo);
    setStep(2);
  };

  const handleReadmeGenerated = (readme: string) => {
    setGeneratedReadme(readme);
    setStep(3);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const token = localStorage.getItem('github_token');
      console.log('Token from localStorage:', token);
      
      if (!token) {
        console.error('No GitHub token found');
        window.location.href = '/auth';
        return;
      }

      try {
        console.log('Fetching repos...');
        const fetchedRepos = await getUserRepos();
        console.log('Fetched repos:', fetchedRepos);
        setRepos(fetchedRepos);
      } catch (error) {
        console.error('Failed to fetch repositories:', error);
        if (error instanceof Error && error.message === 'No GitHub token found') {
          window.location.href = '/auth';
        }
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-2 bg-gray-700 rounded-full">
            <div
              className="h-full bg-green-300 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
        {step === 1 && <RepoSelector repos={repos} onSelect={handleRepoSelect} />}
        {step === 2 && <ReadmeGenerator repo={selectedRepo} onGenerate={handleReadmeGenerated} />}
        {step === 3 && <ReadmeViewer readme={generatedReadme} repoFullName={selectedRepo} />}
      </div>
    </div>
  );
};

export default Generate;