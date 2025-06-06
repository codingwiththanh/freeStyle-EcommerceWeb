import { Link } from 'react-router-dom';
import { ShoppingCart, LogIn } from 'lucide-react';

function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Store FreeStyle</Link>
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center">Trang chủ</Link>
          <Link to="/cart" className="flex items-center">
            <ShoppingCart className="w-5 h-5 mr-1" /> Giỏ hàng
          </Link>
          <Link to="/login" className="flex items-center">
            <LogIn className="w-5 h-5 mr-1" /> Đăng nhập
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;