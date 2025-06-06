import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { Button } from "../../components/ui/button"; 
function Home() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm 1', price: 100000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Sản phẩm 2', price: 200000, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Sản phẩm 3', price: 300000, image: 'https://via.placeholder.com/150' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button className="m-5">Click me</Button>
    </div>
  );
}

export default Home;