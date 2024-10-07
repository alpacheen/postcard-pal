import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function History() {
  const [postcards, setPostcards] = useState([]);

  useEffect(() => {
    const savedPostcards = JSON.parse(localStorage.getItem('postcards') || '[]');
    setPostcards(savedPostcards);
  }, []);

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade-in">
      <h2 className="text-4xl font-serif font-bold mb-8 text-coffee text-center">Postcard History</h2>
      {postcards.length === 0 ? (
        <p className="text-center text-mocha text-lg">No postcards created yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postcards.map((postcard, index) => (
            <li key={postcard.id} className="bg-vanilla rounded-lg shadow-md overflow-hidden animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-coffee">To: {postcard.recipient}</h3>
                <p className="text-mocha mb-4">{postcard.message}</p>
                <div className="flex justify-between">
                  <Link to={`/edit/${postcard.id}`} className="btn btn-secondary text-sm">Edit</Link>
                  <button onClick={() => handleDelete(postcard.id)} className="btn bg-sepia hover:bg-coffee text-cream text-sm">Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
