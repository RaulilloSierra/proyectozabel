import { useEffect } from "react";import { useAppStore } from "../stores/useAppStore";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const fetchProducts = useAppStore((state) => state.fetchProducts);
  const products = useAppStore((state) => state.products);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="text-center text-5xl text-emerald-600 uppercase font-bold">
        Nuestros servicios
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-20 mx-30">
        {products.map((product) => (
          <ServiceCard key={product.productId} product={product}  />
        ))}
      </div>
    </div>
  );
}

export default Services;
