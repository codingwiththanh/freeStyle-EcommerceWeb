import React from "react"
import New from "./components/New"
import SiderComponents from "./components/SiderComponents"
import Feedback from "./components/Feedback"

const Trangchu = () => {
  return (
    <>
      <p className="mt-2 flex h-10 items-center justify-center px-4 text-sm font-medium bg-[#FAF3E0] sm:px-6 lg:px-8">
        Đăng ký ngay để nhận các thông tin mới nhất !
      </p>
      <SiderComponents />
      <p className="text-center text-4xl tracking-tight text-gray-900 border-t py-6">
        Sản phẩm mới nhất !
      </p>
      <New />
      <Feedback />
    </>
  )
}

export default Trangchu