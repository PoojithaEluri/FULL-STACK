import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CRUD App</h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200">
            Users
          </Link>

          <Link to="/products" className="hover:text-gray-200">
            Products
          </Link>

          <Link to="/orders" className="hover:text-gray-200">
            Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}