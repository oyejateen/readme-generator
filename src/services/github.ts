import axios from 'axios';

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;
const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const authenticateWithGitHub = () => {
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`;
  window.location.href = authUrl;
};

export const handleAuthCallback = async (code: string) => {
  try {
    const response = await axios.post(`${SERVER_URL}/api/github/callback`, { code }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    const { access_token } = response.data;
    if (!access_token) {
      throw new Error('No access token received from server');
    }
    localStorage.setItem('github_token', access_token);
    console.log('Token stored in localStorage:', access_token);
    return access_token;
  } catch (error) {
    console.error('Error handling GitHub callback:', error);
    throw error;
  }
};

export const getUserRepos = async (): Promise<any[]> => {
  const token = localStorage.getItem('github_token');
  if (!token) throw new Error('No GitHub token found');

  let allRepos: any[] = [];
  let nextPage = `${GITHUB_API_URL}/user/repos?per_page=100`;

  while (nextPage) {
    try {
      console.log('Sending request with token:', token);
      const response = await axios.get(nextPage, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Response:', response);
      allRepos = allRepos.concat(response.data);

      const linkHeader = response.headers.link;
      const nextPageUrl = getNextPageUrl(linkHeader);
      if (!nextPageUrl) break;
      nextPage = nextPageUrl;
    } catch (error) {
      console.error('Error fetching user repos:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
        console.error('Response headers:', error.response?.headers);
      }
      throw error;
    }
  }

  return allRepos;
};

function getNextPageUrl(linkHeader: string | undefined): string | null {
  if (!linkHeader) return null;
  const links = linkHeader.split(',');
  for (const link of links) {
    const [url, rel] = link.split(';');
    if (rel.includes('rel="next"')) {
      return url.trim().slice(1, -1);
    }
  }
  return null;
}

export const getRepoContent = async (repoFullName: string): Promise<string> => {
  const token = localStorage.getItem('github_token');
  if (!token) throw new Error('No GitHub token found');

  try {
    const response = await axios.get(`${GITHUB_API_URL}/repos/${repoFullName}/contents`, {
      headers: { Authorization: `token ${token}` },
    });
    
    const files = response.data;
    let content = '';

    for (const file of files) {
      if (file.type === 'file') {
        const fileContent = await axios.get(file.download_url);
        content += `File: ${file.name}\n\n${fileContent.data}\n\n`;
      }
    }

    return content;
  } catch (error) {
    console.error('Error fetching repo content:', error);
    throw new Error('Failed to fetch repository content');
  }
};

export const updateReadme = async (repoFullName: string, content: string): Promise<void> => {
  const token = localStorage.getItem('github_token');
  if (!token) throw new Error('No GitHub token found');

  try {
    const [owner, repo] = repoFullName.split('/');
    const response = await axios.get(`${GITHUB_API_URL}/repos/${owner}/${repo}/contents/README.md`, {
      headers: { Authorization: `token ${token}` },
    });

    const { sha } = response.data;
    const encodedContent = btoa(content);

    await axios.put(
      `${GITHUB_API_URL}/repos/${owner}/${repo}/contents/README.md`,
      {
        message: 'Update README.md',
        content: encodedContent,
        sha,
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    );
  } catch (error) {
    console.error('Error updating README:', error);
    throw new Error('Failed to update README');
  }
};

export const commitReadme = async (repoFullName: string, content: string): Promise<void> => {
  const token = localStorage.getItem('github_token');
  if (!token) throw new Error('No GitHub token found');

  try {
    const [owner, repo] = repoFullName.split('/');
    let sha: string | undefined;

    // Check if README.md exists
    try {
      const response = await axios.get(`${GITHUB_API_URL}/repos/${owner}/${repo}/contents/README.md`, {
        headers: { Authorization: `token ${token}` },
      });
      sha = response.data.sha;
    } catch (error) {
      // If README.md doesn't exist, sha will remain undefined
    }

    const encodedContent = btoa(content);

    await axios.put(
      `${GITHUB_API_URL}/repos/${owner}/${repo}/contents/README.md`,
      {
        message: sha ? 'Update README.md' : 'Create README.md',
        content: encodedContent,
        sha,
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    );
  } catch (error) {
    console.error('Error committing README:', error);
    throw new Error('Failed to commit README');
  }
};