import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Pages/CartContext";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const AppHeader = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUserEmail(localStorage.getItem("userEmail"));
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#130A78] text-white shadow-lg z-50 flex items-center justify-between px-6 py-4 h-16">
      <nav className="flex-grow flex justify-center">
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/shop" className="hover:text-yellow-400">Shop</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li className="relative">
            <Link to="/cart">
            🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="flex items-center space-x-4">
        {!userEmail ? (
          <Link to="/login" className="flex items-center space-x-2 hover:text-gray-400">
            <AiOutlineUser className="text-xl" />
            <span>Login</span>
          </Link>
        ) : (
          <>
            <span className="text-yellow-400">{userEmail}</span>
            <button onClick={handleLogout} className="flex items-center space-x-2 hover:text-red-400">
              <FiLogOut className="text-xl" />
              <span>Logout</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default AppHeader;