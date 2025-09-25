import React, { useState } from 'react';

const LandingPage = ({ onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(email, password);
    } else {
      onSignup(name, email, password);
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')`}}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4">
        <div className="md:w-1/2 text-white p-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Welcome to Feastly</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Discover and share amazing food from local restaurants.</p>
          <div className="space-x-4">
             <button 
                onClick={() => { onLogin('demo@example.com', 'password'); }} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
              > 
                Try Demo
             </button>
             <a href="/admin" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Admin Panel</a>
          </div>
        </div>
        <div className="md:w-1/2 w-full max-w-md mt-10 md:mt-0">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="flex border-b mb-6">
              <button onClick={() => setIsLogin(true)} className={`w-1/2 py-3 text-center font-semibold ${isLogin ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}>Login</button>
              <button onClick={() => setIsLogin(false)} className={`w-1/2 py-3 text-center font-semibold ${!isLogin ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}>Sign Up</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition duration-300">
                {isLogin ? 'Log In' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
