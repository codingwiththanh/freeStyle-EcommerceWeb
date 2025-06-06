import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, UserRound, ShoppingBag } from 'lucide-react';

const Navi = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const userEmail = localStorage.getItem("userEmail");

  const click_Dangxuat = () => {
    localStorage.removeItem("userEmail");
    navigate("/dangnhap");
  };

  return (
    <header className="bg-white border-b border-gray-200 py-1">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-primary text-5xl leading-[52px] cursor-pointer font-bold font-blackItalic">
              Freestyle
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden lg:flex lg:space-x-8">
            <Link to="/quan" className={`cursor-pointer text-xl ${isActive("/quan") ? "text-primary" : ""}`}>
              Quần
            </Link>
            <Link to="/ao" className={`cursor-pointer text-xl ${isActive("/ao") ? "text-primary" : ""}`}>
              Áo
            </Link>
            <Link to="/phukien" className={`cursor-pointer text-xl ${isActive("/phukien") ? "text-primary" : ""}`}>
              Phụ Kiện
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Bạn đang tìm gì..."
                className="border-none outline-none bg-inputBg rounded-full pl-10 py-2 w-[280px] text-base"
              />
              <div className="absolute left-2 top-1/2 -translate-y-1/2">
                <Link to="/timkiem" className={isActive("/timkiem") ? "text-primary" : ""}>
                  <Search />
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {userEmail ? (
                <div className="text-gray-600 cursor-pointer" onClick={click_Dangxuat}>
                  {userEmail}
                </div>
              ) : (
                <div className="text-2xl text-gray-600 cursor-pointer">
                  <Link to="/dangnhap" className={isActive("/dangnhap") ? "text-primary" : ""}>
                    <UserRound />
                  </Link>
                </div>
              )}
              <div className="text-2xl text-gray-600 cursor-pointer">
                <Link to="/giohang" className={isActive("/giohang") ? "text-primary" : ""}>
                  <ShoppingBag />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navi;