
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';


function ProductCard({ product }) {


  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.price} VNĐ</p>
      <div className="flex space-x-2 mt-2">
        <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center">
          <Eye className="w-5 h-5 mr-1" /> Xem chi tiết
        </Link>
        <button
          
          className="bg-green-500 text-white px-4 py-2 rounded inline-flex items-center"
        >
          <ShoppingCart className="w-5 h-5 mr-1" /> Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}

export default ProductCard;