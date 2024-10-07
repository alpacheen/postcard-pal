import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-coffee bg-opacity-90 text-cream shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold animate-fade-in">PostcardPal</Link>
        <nav className="animate-slide-in">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-vanilla transition-colors duration-200">Home</Link></li>
            <li><Link to="/create" className="hover:text-vanilla transition-colors duration-200">Create</Link></li>
            <li><Link to="/history" className="hover:text-vanilla transition-colors duration-200">History</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;