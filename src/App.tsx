import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './components/Auth';
import Generate from './pages/Generate';
import { handleAuthCallback } from './services/github';

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      handleAuthCallback(code)
        .then((token) => {
          console.log('Token received:', token);
          navigate('/generate');
        })
        .catch((error) => {
          console.error('Authentication failed:', error);
          navigate('/auth', { state: { error: 'Authentication failed' } });
        });
    } else {
      navigate('/auth', { state: { error: 'No authentication code received' } });
    }
  }, [navigate]);

  return <div>Authenticating...</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/generate" element={<Generate />} />
          <Route path="/callback" element={<AuthCallback />} />
        </Routes>
    </Router>
  );
}

export default App;