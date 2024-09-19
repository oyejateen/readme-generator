import React from 'react';
import Button from './Button';
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
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleCopy} icon={faCopy} color="green">
          Copy
        </Button>
        <Button onClick={handleDownload} icon={faDownload} color="blue">
          Download
        </Button>
        <Button onClick={handleRegenerate} icon={faRedo} color="yellow">
          Regenerate
        </Button>
        <Button onClick={handleCommit} icon={faCodeCommit} color="purple">
          Commit to GitHub
        </Button>
      </div>
    </div>
  );
};

export default ReadmeViewer;