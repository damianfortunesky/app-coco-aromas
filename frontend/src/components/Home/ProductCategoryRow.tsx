import React from "react";

interface ProductCategoryRowProps {
  category: string;
}

const ProductCategoryRow: React.FC<ProductCategoryRowProps> = ({ category }) => {
  return (
    <tr>
      <th colSpan={2} className="bg-gray-100 text-left py-2 px-4 text-sm font-bold text-gray-700">
        {category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
