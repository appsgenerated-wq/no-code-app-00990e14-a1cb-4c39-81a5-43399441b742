import React, { useEffect, useState } from 'react';
import { UserCircleIcon, ArrowRightOnRectangleIcon, BuildingStorefrontIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

const DashboardPage = ({ user, restaurants, onLogout, onLoadRestaurants, onCreateRestaurant }) => {
  const [newRestaurant, setNewRestaurant] = useState({ title: '', description: '', address: '' });
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    onLoadRestaurants();
  }, [onLoadRestaurants]);

  const handleCreateRestaurant = async (e) => {
    e.preventDefault();
    await onCreateRestaurant(newRestaurant);
    setNewRestaurant({ title: '', description: '', address: '' });
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BuildingStorefrontIcon className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Feastly Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-6 w-6 text-gray-500" />
                <span className="text-gray-700 font-medium">{user.name} ({user.role})</span>
            </div>
            <a href="/admin" target="_blank" rel="noopener noreferrer" className="hidden sm:block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition">Admin Panel</a>
            <button onClick={onLogout} className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Restaurants</h2>
          <button onClick={() => setIsCreating(!isCreating)} className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
            <PlusCircleIcon className="h-5 w-5"/>
            <span>{isCreating ? 'Cancel' : 'Add Restaurant'}</span>
          </button>
        </div>

        {isCreating && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-fade-in-down">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Create New Restaurant</h3>
            <form onSubmit={handleCreateRestaurant} className="space-y-4">
              <input type="text" placeholder="Restaurant Name" value={newRestaurant.title} onChange={(e) => setNewRestaurant({...newRestaurant, title: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" required />
              <textarea placeholder="Description" value={newRestaurant.description} onChange={(e) => setNewRestaurant({...newRestaurant, description: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows="3"/>
              <input type="text" placeholder="Address" value={newRestaurant.address} onChange={(e) => setNewRestaurant({...newRestaurant, address: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
              <div className="flex justify-end">
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">Create</button>
              </div>
            </form>
          </div>
        )}

        {restaurants.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-lg shadow-md">
            <p className="text-gray-500">No restaurants found. Be the first to add one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map(restaurant => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                 <div className="h-48 bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url(${restaurant.heroImageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'})`}}></div>
                <div className="p-4">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{restaurant.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{restaurant.address}</p>
                  <p className="text-gray-600 text-sm mb-4 h-10 overflow-hidden">{restaurant.description}</p>
                  <div className="border-t pt-3 flex justify-between items-center">
                     <p className="text-xs text-gray-500">Owner: {restaurant.owner?.name || 'N/A'}</p>
                     {user.id === restaurant.ownerId && <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Your Restaurant</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
