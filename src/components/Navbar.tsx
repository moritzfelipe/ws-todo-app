import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Menu className="inline-block w-6 h-6 mr-2" />
          My Todo App
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
