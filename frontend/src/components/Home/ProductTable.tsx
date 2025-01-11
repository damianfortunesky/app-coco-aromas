import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface ProductTableProps {
  products: {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Nombre</th>
          <th className="border border-gray-300 px-4 py-2">Precio</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductRow key={product.name} product={product} />
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
