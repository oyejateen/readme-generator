import React, { useState, useEffect } from 'react';
import { getRepoContent } from '../services/github';
import { generateReadme } from '../services/llm';

interface ReadmeGeneratorProps {
  repo: string;
  onGenerate: (readme: string) => void;
}

const ReadmeGenerator: React.FC<ReadmeGeneratorProps> = ({ repo, onGenerate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pun, setPun] = useState('');

  const puns = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "I'd tell you a UDP joke, but you might not get it.",
    "Why do Java developers wear glasses? Because they don't C#!",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!"
  ];

  useEffect(() => {
    generateReadmeContent();
    const punInterval = setInterval(() => {
      setPun(puns[Math.floor(Math.random() * puns.length)]);
    }, 5000);

    return () => clearInterval(punInterval);
  }, [repo]);

  const generateReadmeContent = async () => {
    try {
      setIsLoading(true);
      const repoContent = await getRepoContent(repo);
      const generatedReadme = await generateReadme(repoContent);
      onGenerate(generatedReadme);
    } catch (error) {
      console.error('Error generating README:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-64">
      {isLoading ? (
        <>
          <div className="w-16 h-16 border-t-4 border-green-300 border-solid rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-semibold mb-2">Generating your README...</p>
          <p className="text-sm text-gray-400 italic">{pun}</p>
        </>
      ) : (
        <p className="text-lg font-semibold">README generated successfully!</p>
      )}
    </div>
  );
};

export default ReadmeGenerator;