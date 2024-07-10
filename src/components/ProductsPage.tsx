import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "../redux/store";
import { IProduct, fetchProducts } from "../redux/product/productsSlice";

const Products: React.FC = () => {
  const products: IProduct[] = useSelector(
    (state: AppRootState) => state.product.value
  );
  const isLoading: boolean = useSelector(
    (state: AppRootState) => state.product.isLoading
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p className="text-center text-green-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold text-green-700 mb-2">{p.title}</h3>
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover mb-2 rounded" />
              <p className="text-gray-700 mb-2">{p.description}</p>
              <p className="text-green-600 font-semibold">Price: ${p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
