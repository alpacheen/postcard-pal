import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto mt-16 px-4 text-center animate-fade-in">
      <div className="content-area">
        <h1 className="text-5xl font-serif font-bold text-coffee mb-6">Welcome to PostcardPal</h1>
        <p className="text-xl text-mocha mb-12">Create and send beautiful vintage-style postcards to your loved ones!</p>
        <Link to="/create" className="btn btn-primary text-lg">
          Create Your First Postcard
        </Link>
      </div>
    </div>
  );
}

export default Home;
