import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <footer className="bg-[#FAFAFA] border-t border-[#CFD3CB]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0 w-80">
              <span className="text-4xl font-bold text-primary font-blackItalic">Freestyle</span>
              <h3 className="text-sm text-gray-900 mt-2 font-bold font-semiBold">HKD Nguyễn Văn Thành</h3>
              <div className="text-[10px] text-gray-900 font-regular">
                <p>
                  Giấy chứng nhận đăng ký HKD số 17A80041952 do Phòng Tài chính - Kế hoạch, Uỷ ban nhân dân thành phố Thái
                  Nguyên cấp ngày 30/5/2019
                </p>
                <p>Địa chỉ: Số 235, Đường Quang Trung, Tổ 7, Phường Tân Thịnh, Thành phố Thái Nguyên, Tỉnh Thái Nguyên, Việt Nam</p>
                <p>Email: freestyle@gmail.com</p>
                <p>Điện thoại: 0987654321</p>
              </div>
              <img src="/media/banner-home/logo_bct.png" alt="" className="h-16 my-2" />
            </div>

            <div className="w-96">
              <p className="text-sm font-regular">Đăng ký nhận bản tin của chúng tôi để nhận thông tin mới nhất về sản phẩm và ưu đãi.</p>
              <form action="" className="my-4 flex flex-col gap-2">
                <input
                  className="w-full border-b-2 p-2 text-base bg-transparent outline-none font-regular"
                  type="email"
                  placeholder="Nhập email của bạn"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#FAF3E0] text-primary py-3 px-7 border-none cursor-pointer transition-colors duration-300 font-bold font-semiBold"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              <h2 className="text-sm font-semiBold">Theo dõi các nền tảng</h2>
              <div className="flex gap-4 mt-2">
                <a href=""><Facebook /></a>
                <a href=""><Instagram /></a>
                <a href=""><Github /></a>
                <a href=""><Youtube /></a>
              </div>
            </div>

            <div>
              <h3 className="text-base mb-2 text-primary font-bold font-semiBold">Về chúng tôi</h3>
              <div className="flex flex-col gap-2 text-sm font-regular">
                <Link to="/" className={isActive("/") ? "text-primary" : "text-gray-800 hover:text-primary"}>Trang chủ</Link>
                <Link to="/gioithieu" className={isActive("/gioithieu") ? "text-primary" : "text-gray-800 hover:text-primary"}>Giới thiệu</Link>
                <Link to="/album" className={isActive("/album") ? "text-primary" : "text-gray-800 hover:text-primary"}>Album</Link>
                <Link to="/blog" className={isActive("/blog") ? "text-primary" : "text-gray-800 hover:text-primary"}>Blog</Link>
                <Link to="/hethongcuahang" className={isActive("/hethongcuahang") ? "text-primary" : "text-gray-800 hover:text-primary"}>Hệ thống cửa hàng</Link>
              </div>
            </div>

            <div>
              <h3 className="text-base mb-2 text-primary font-bold font-semiBold">Chính sách</h3>
              <div className="flex flex-col gap-2 text-sm font-regular">
                <a href="#" className="hover:text-gray-800">Chính sách bảo mật</a>
                <a href="#" className="hover:text-gray-800">Chính sách đổi trả</a>
                <a href="#" className="hover:text-gray-800">Chính sách vận chuyển</a>
                <a href="#" className="hover:text-gray-800">Chính sách thanh toán</a>
                <a href="#" className="hover:text-gray-800">Chính sách bảo hành</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500 text-center border-t py-2 font-regular">
          © 2025 Thiết kế và phát triển bởi <span className="text-primary">Nguyễn Văn Thành</span> và <span className="text-primary">Nguyễn Nhật Tú</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;