import Navbar from './Navbar';
import AuthCard from './AuthCard';
const Auth = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">
        <AuthCard />
      </div>
    </div>
  );
};

export default Auth;