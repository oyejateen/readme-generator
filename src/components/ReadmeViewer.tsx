import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faDownload, faRedo, faCodeCommit } from '@fortawesome/free-solid-svg-icons';
import { commitReadme } from '../services/github';

interface ReadmeViewerProps {
  readme: string;
  repoFullName: string;
}

const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ readme, repoFullName }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(readme);
    alert('README copied to clipboard!');
  };

  const handleDownload = () => {
    const blob = new Blob([readme], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRegenerate = () => {
    // Implement regeneration logic here
    console.log('Regenerating README...');
  };

  const handleCommit = async () => {
    try {
      await commitReadme(repoFullName, readme);
      alert('README committed successfully!');
    } catch (error) {
      console.error('Error committing README:', error);
      alert('Failed to commit README. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Generated README</h2>
      <div className="bg-gray-800 p-4 rounded-md">
        <pre className="whitespace-pre-wrap text-sm">{readme}</pre>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleCopy}
          className="bg-green-300 text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center"
        >
          <FontAwesomeIcon icon={faCopy} className="mr-2" />
          Copy
        </button>
        <button
          onClick={handleDownload}
          className="bg-blue-300 text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download
        </button>
        <button
          onClick={handleRegenerate}
          className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center"
        >
          <FontAwesomeIcon icon={faRedo} className="mr-2" />
          Regenerate
        </button>
        <button
          onClick={handleCommit}
          className="bg-purple-300 text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center"
        >
          <FontAwesomeIcon icon={faCodeCommit} className="mr-2" />
          Commit to GitHub
        </button>
      </div>
    </div>
  );
};

export default ReadmeViewer;