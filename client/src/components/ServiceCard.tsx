import type { Product } from "../types";

type ServiceCardType = {
  product: Product;
};

function ServiceCard({ product }: ServiceCardType) {
  return (
    <div className="border border-gray-400 p-4 shadow-lg">
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{product.name}</h2>
        <p>{product.description}</p>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 mt-5 w-full p-3 font-bold text-white text-lg capitalize"
        >
          {product.price}
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
