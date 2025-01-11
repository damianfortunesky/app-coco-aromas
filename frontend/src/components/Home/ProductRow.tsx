import React from "react";

interface ProductRowProps {
  product: {
    name: string;
    price: string;
    stocked: boolean;
  };
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  const nameStyle = product.stocked
    ? "text-gray-900"
    : "text-red-500 line-through";

  return (
    <tr>
      <td className={`py-2 px-4 text-sm ${nameStyle}`}>{product.name}</td>
      <td className="py-2 px-4 text-sm text-gray-600">{product.price}</td>
    </tr>
  );
};

export default ProductRow;
